import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
const root=fileURLToPath(new URL('..',import.meta.url));
async function files(dir){const result=[];for(const e of await readdir(path.join(root,dir),{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())result.push(...await files(p));else if(/\.(ts|tsx)$/.test(p))result.push(p);}return result;}
async function exists(file){try{await stat(file);return true;}catch{return false;}}
test('application sources parse and every local import resolves',async()=>{
 const problems=[];
 for(const relative of (await Promise.all(['app','components','context','lib'].map(files))).flat()){
  const file=path.join(root,relative);const source=ts.createSourceFile(file,await readFile(file,'utf8'),ts.ScriptTarget.Latest,true);
  for(const error of source.parseDiagnostics)problems.push(`${relative}: ${ts.flattenDiagnosticMessageText(error.messageText,' ')}`);
  for(const statement of source.statements){if(!ts.isImportDeclaration(statement))continue;const specifier=statement.moduleSpecifier.text;if(!specifier.startsWith('@/')&&!specifier.startsWith('.'))continue;
   const base=specifier.startsWith('@/')?path.join(root,specifier.slice(2)):path.resolve(path.dirname(file),specifier);
   const candidates=[base,base+'.ts',base+'.tsx',path.join(base,'index.ts'),path.join(base,'index.tsx')];
   if(!(await Promise.all(candidates.map(exists))).some(Boolean))problems.push(`${relative}: missing ${specifier}`);
  }
 }
 assert.deepEqual(problems,[]);
});
test('catalog images exist and public static navigation links resolve to routes',async()=>{
 const {products}=await import('../lib/shop/catalog.ts');for(const product of products)assert.ok(await exists(path.join(root,'public',product.image.slice(1))),product.image);
 const routes=(await files('app')).filter(f=>f.endsWith('/page.tsx')).map(f=>'/'+path.dirname(f).split(path.sep).slice(1).filter(s=>!s.startsWith('(')).join('/'));
 const issues=[];for(const relative of (await Promise.all(['app','components'].map(files))).flat()){
  const source=ts.createSourceFile(relative,await readFile(path.join(root,relative),'utf8'),ts.ScriptTarget.Latest,true);
  function visit(node){if(ts.isJsxAttribute(node)&&node.name.getText(source)==='href'&&node.initializer&&ts.isStringLiteral(node.initializer)){
   const href=node.initializer.text;if(href.startsWith('/')&&!href.startsWith('//')){const target=href.split(/[?#]/)[0];const match=routes.some(route=>new RegExp('^'+route.replace(/\[[^\]]+\]/g,'[^/]+')+'$').test(target));if(!match)issues.push(`${relative}: ${target}`);}
  }ts.forEachChild(node,visit);}visit(source);
 }
 assert.deepEqual(issues,[]);
});

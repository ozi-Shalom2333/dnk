import ts from 'typescript';
import { readFile } from 'node:fs/promises';
export async function resolve(specifier, context, nextResolve) {
  if (context.parentURL && specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
    const candidate = new URL(specifier + '.ts', context.parentURL);
    try {
      await readFile(candidate);
      return {
        url: candidate.href,
        shortCircuit: true
      };
    } catch {}
  }
  return nextResolve(specifier, context);
}
export async function load(url, context, nextLoad) {
  if (new URL(url).pathname.endsWith('.ts')) {
    const source = await readFile(new URL(url), 'utf8');
    return {
      format: 'module',
      source: ts.transpileModule(source, {
        compilerOptions: {
          module: ts.ModuleKind.ESNext,
          target: ts.ScriptTarget.ES2020
        }
      }).outputText,
      shortCircuit: true
    };
  }
  return nextLoad(url, context);
}

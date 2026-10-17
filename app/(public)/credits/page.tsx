import Image from "next/image";
export const metadata = {
  title: "Imagery and inspiration"
};
export default function CreditsPage() {
  return <div className="site-width section-space prose-content">
    <p className="eyebrow">Imagery and inspiration</p>
    <h1>Credit where it belongs.</h1>
    <h2>A visual direction for DNK</h2>
    <p>The original DNK logo, blue fashion photography, bold headings and full-width banners anchor this storefront. Supplied fashion-store screenshots informed spacing, collection browsing, product grids and mobile layouts. Their photographs, logos and template code were not copied. Earlier Pinterest and Freepik research remains inspiration for possible future imagery.</p>
    <h2>Licensed optional reference</h2>
    <div className="reference-photo">
      <Image src="https://images.unsplash.com/photo-1603400521630-9f2de124b33b?auto=format&fit=crop&w=1000&q=80" alt="Neutral garments arranged on clothing racks" fill sizes="(max-width:760px) 90vw, 760px" unoptimized className="object-cover" />
    </div>
    <p className="small-text mt-4">Photo by <a className="underline" href="https://unsplash.com/@thombradley">Thom Bradley</a> on <a className="underline" href="https://unsplash.com/photos/clothing-racks-with-neutral-toned-garments-mwa_nzFpnJw">Unsplash</a>. The source page marks it free under the <a className="underline" href="https://unsplash.com/license">Unsplash License</a>. Credit is provided voluntarily.</p>
    <h2>Preserved project imagery</h2>
    <p>Existing product, category and banner images have been preserved from the supplied project. Their original licenses and release records were not included, so their rights could not be verified. This refactor does not establish permission to publish them commercially. Confirm their source and license or replace them before commercial launch.</p>
    <h2>Reference sources</h2>
    <p><a className="underline" href="https://www.pinterest.com/pin/fashion-ecommerce-website-ui-design--599823244134492543/">Pinterest fashion ecommerce reference</a> (inspiration only). <a className="underline" href="https://br.freepik.com/fotos-gratis/loja-de-roupas-com-estante-de-roupas_13564217.htm">Freepik clothing-store photograph</a> (candidate only; not downloaded). Check its exact download license and attribution before use.</p>
  </div>;
}

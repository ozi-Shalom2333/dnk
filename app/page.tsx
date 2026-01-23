import Hero from "./components/hero";
import HeroSecond from "./components/heroSecond";
import Products from "./components/products";
import PromoSection from "./components/promoSection";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PromoSection/>
      <Products/>
      <HeroSecond/>
    </div>
  );
}

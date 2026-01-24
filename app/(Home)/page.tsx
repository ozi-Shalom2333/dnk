import Hero from "../../components/home/hero";
import HeroSecond from "../../components/home/heroSecond";
import Products from "../../components/home/products";
import PromoSection from "../../components/home/promoSection";
import Value from "../../components/home/value";


export default function Home() {
  return (
    <div className="">
      <Hero/>
      <PromoSection/>
      <Products/>
      <HeroSecond/>
      <Value/>
    </div>
  );
}

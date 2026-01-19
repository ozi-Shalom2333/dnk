import Card from "./card";
import CaroselSlider from "./caroselSlider";

export default function PromoSection() {
    return (
        <section className="bg-white py-12 min-h-screen border-2 border-gray-950 flex flex-col items-center gap-12">
            <CaroselSlider/>
            <Card/>
        </section>
    );
}
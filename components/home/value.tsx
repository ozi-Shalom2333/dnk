import { Eye, Heart, ShoppingBag, ShieldCheck } from "lucide-react";
const values = [{
  icon: Eye,
  title: "A clear view",
  text: "Explore the full catalog with useful filters."
}, {
  icon: Heart,
  title: "Keep your favorites",
  text: "Save pieces to a wishlist on this browser."
}, {
  icon: ShoppingBag,
  title: "Make it yours",
  text: "Choose a size and build your own basket."
}, {
  icon: ShieldCheck,
  title: "Know where you stand",
  text: "Review checkout before payment. No purchase is made."
}];
export default function Value() {
  return <section className="values-section">
    <div className="site-width values-grid">
      {values.map(v => <div key={v.title}>
        <v.icon size={25} strokeWidth={1.4} />
        <h2>{v.title}</h2>
        <p>{v.text}</p>
      </div>)}
    </div>
  </section>;
}

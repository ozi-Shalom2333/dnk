import Navbar from "@/components/everthing/navbar";
import Footer from "@/components/web/footer";

export default function EverythingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#F5F7F9] flex flex-col gap-10">
        <Navbar/>
            {children}
        <Footer/>    
        </div>
    );
}   
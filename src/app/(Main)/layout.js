import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhyDriveFleet from "@/components/WhyDriveFleet";

export default function DashboardLayout({children}){
    return <section>
        <Navbar></Navbar>
        {children}
        <WhyDriveFleet></WhyDriveFleet>
        <Footer></Footer>
    </section>
}
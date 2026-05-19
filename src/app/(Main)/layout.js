import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import WhyDriveFleet from "@/components/WhyDriveFleet";

export default function DashboardLayout({children}){
    return <section>
        <Navbar></Navbar>
        {children}
        <WhyDriveFleet></WhyDriveFleet>
        <HowItWorks></HowItWorks>
        <Footer></Footer>
    </section>
}
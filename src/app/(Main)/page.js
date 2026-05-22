import AvailableSection from "@/components/AvailableSection";
import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import WhyDriveFleet from "@/components/WhyDriveFleet";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <AvailableSection></AvailableSection>
      <WhyDriveFleet></WhyDriveFleet>
      <HowItWorks></HowItWorks>
    </div>
  );
}

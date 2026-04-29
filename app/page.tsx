import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Features from "@/components/sections/Features";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadCaptureForm from "@/components/sections/LeadCaptureForm";
import Partners from "@/components/sections/Partners";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import DomainExpertise from "@/components/sections/DomainExpertise";
import CourseSegmentation from "@/components/sections/CourseSegmentation";
import WhoShouldJoin from "@/components/sections/WhoShouldJoin";
import EnquireModal from "@/components/layout/EnquireModal";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Partners />
        <Features />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <HowItWorks />
        <FAQs />
        <Testimonials />
        <LeadCaptureForm />
      </main>
      <EnquireModal />
      <Footer />
    </div>
  );
}

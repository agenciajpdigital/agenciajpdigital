import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Reviews from "@/components/Reviews";
import LocationSection from "@/components/LocationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import DiagnosticModal from "@/components/DiagnosticModal";
import RecorrenciaHome from "@/components/RecorrenciaHome";
import RecorrenciaMensalHome from "@/components/RecorrenciaMensalHome";

const Index = () => {
  const [quizOpen, setQuizOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onOpenQuiz={() => setQuizOpen(true)} />
      <Hero onOpenQuiz={() => setQuizOpen(true)} />
      <Services />
      <RecorrenciaHome onOpenQuiz={() => setQuizOpen(true)} />
      <HowItWorks />
      <AboutUs />
      <Reviews />
      <LocationSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
      <DiagnosticModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  );
};

export default Index;

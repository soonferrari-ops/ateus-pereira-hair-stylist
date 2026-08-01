import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Strand } from "@/components/ui/Strand";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strand className="mx-auto max-w-4xl opacity-50" />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Vision from "@/components/Vision";
import FindMore from "@/components/FindMore";
import FuturePlans from "@/components/FuturePlans";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Products />
      <Vision />
      <FindMore />
      <FuturePlans />
      <FAQ />
      <About />
      <Security />
      <Footer />
    </main>
  );
};

export default Index;

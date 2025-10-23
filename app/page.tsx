import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import AboutCTA from "@/components/AboutCTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Products />
        <AboutCTA />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach Sabin Quick Solution by phone, email or WhatsApp. We respond within minutes.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px]">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

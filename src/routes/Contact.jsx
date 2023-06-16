import Contactt from "../components/contact/Contact";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Nav";

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        title="Contact"
        cName="hero"
        url="/"
        img="https://images.unsplash.com/photo-1614107151491-6876eecbff89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
      />
      <Contactt />
      <Footer />
    </>
  );
}

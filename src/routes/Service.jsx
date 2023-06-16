import Navbar from "../components/Nav";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Servic from "../components/services/ServicesTrip";

export default function Services() {
  return (
    <>
      <Navbar />
      <Hero
        title="Services"
        cName="hero"
        img="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
      />
      <Servic />
      <Footer />
    </>
  );
}

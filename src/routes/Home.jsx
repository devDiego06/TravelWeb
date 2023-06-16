import { Footer } from "../components/footer/Footer";
import Destination from "../components/hero/Destination";
import Hero from "../components/hero/Hero";
import Trips from "../components/hero/Trip";
import Navbar from "../components/Nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        title="Your Journey Your Story"
        subtitle="Choose Your Favorite Destination"
        button="Travel Plan"
        cName="hero"
        url="/"
        btnShow="show"
        img="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1141&q=80"
      />
      <Destination />
      <Trips
        title="Mountain"
        img="https://images.unsplash.com/photo-1573097637683-58e6462d2902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      />
      <Footer />
    </>
  );
}

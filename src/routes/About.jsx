import AboutUs from "../components/aboutUs/AboutUs";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Navbar from "../components/Nav";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero
        title="About Us"
        cName="hero"
        url="/"
        img="https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=685&q=80"
      />
      <AboutUs
        title="Our"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        possimus vero cum nam, sequi eius! Nobis necessitatibus, similique vel
        deleniti debitis maxime, modi molestias nostrum laborum aspernatur,
        odit hic provident. lORE Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Pariatur cumque officiis voluptatibus impedit odit,
        fuga reiciendis ullam praesentium earum beatae adipisci tempora!
        Tempora pariatur qui quas illum deserunt mollitia amet?"
        spanHistory="History"
        spanMision="Mision"
        spanVision="Vision"
      />
      <Footer />
    </>
  );
}

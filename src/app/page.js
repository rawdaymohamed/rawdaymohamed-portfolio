import Link from "next/link";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portfolio"> Parallax </section>
      <section>Portfolio Project 1</section>
      <section>Portfolio Project 2</section>
      <section>Portfolio Project 3</section>
      <section id="Contact">Contact</section>
    </div>
  );
}

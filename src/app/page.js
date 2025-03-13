import Link from "next/link";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <section><Navbar /></section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax </section>
      <section>Portfolio Project 1</section>
      <section>Portfolio Project 2</section>
      <section>Portfolio Project 3</section>
      <section>Contact</section>
    </div>
  );
}

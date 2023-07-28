// @client
"use client";
import { Head } from "./Components/Head";
import { Body } from "./Components/Body";
import { Bottom } from "./Components/Bottom";
import { Footer } from "./Components/Footer";

export default function Home() {
  return (
    <section className=" overflow-hidden  ">
     
      <Head />
      <Body />
      <Bottom />
      <Footer />
    </section>
  );
}

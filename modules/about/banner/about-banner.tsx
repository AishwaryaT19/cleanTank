import { aboutBackground, aboutMain } from "./info";
import React from "react";

export default function AboutBanner() {
  return (
    <section className="main" style={{ backgroundImage: `url("${aboutBackground}")` }}>
      <span className="overlay"></span>
      <span>ABOUT US</span>
      <h1>{aboutMain}</h1>
    </section>
  );
}

import { main, mainButton, objective, place, mainBackground } from "./info";
import Link from "next/link";
import React from "react";

export default function HomeBanner() {
  return (
    <section className="main" style={{ backgroundImage: `url("${mainBackground}")` }}>
      <span className="overlay"></span>
      <span className="place">{place}</span>
      <h1>{main}</h1>
      <p>{objective}</p>
      <Link href="/process">{mainButton}</Link>
    </section>
  );
}

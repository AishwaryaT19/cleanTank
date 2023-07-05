import { About_company_backgr, about_array, descContent, descHead, tanks } from "./info";
import Image from "next/image";
import React from "react";

export default function Description() {
  return (
    <section className="desc">
      <div className="img-container">
        <Image src={About_company_backgr} alt="main" fill sizes="100%" />
      </div>
      <div className="stuff-container">
        <span>ABOUT US</span>
        <h2>{descHead}</h2>
        <p>{descContent}</p>
        <h4>{about_array}</h4>
        <ul>
          {tanks.map((tank, index) => {
            return <li key={index}>{tank}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}

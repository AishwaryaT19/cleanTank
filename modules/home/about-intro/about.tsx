import { abContent, abHead, yearsOfExpBackground, years_of_Experience } from "./info";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";

export default function About() {
  const imgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries) => {
    if (window?.innerWidth > 900) {
      const intersecting: boolean = entries[0]?.isIntersecting ?? false;
      entries.forEach(() => {
        if (intersecting) {
          imgRef.current?.classList.add("left-in");
          cardRef.current?.classList.add("right-in");
        }
      });
    }
  }, []);

  useEffect(() => {
    let observer: undefined | IntersectionObserver = undefined;
    if (imgRef.current && cardRef.current) {
      const intersectionOptions: IntersectionObserverInit = { threshold: 0.5 };
      observer = new IntersectionObserver(intersectionCallBack, intersectionOptions);
      observer.observe(imgRef.current);
      observer.observe(cardRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [imgRef, cardRef, intersectionCallBack]);

  return (
    <section className="about-us">
      <div className="img-container" ref={imgRef}>
        <Image src={yearsOfExpBackground} alt="main" fill sizes="100%" />
        <div className="shadow">
          <span className="txt">More Than</span>
          <span className="exp">{years_of_Experience}</span>
          <span className="txt">YEARS</span>
        </div>
      </div>
      <div className="stuff-container" ref={cardRef}>
        <h2>ABOUT US</h2>
        <span>{abHead}</span>
        <p>{abContent}</p>
        <Link href="/about">Read More</Link>
      </div>
    </section>
  );
}

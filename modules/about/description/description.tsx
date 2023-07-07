import { About_company_backgr, about_array, descContent, descHead, tanks } from "./info";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";

export default function Description() {
  const cardRef = useRef<HTMLElement>(null);
  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries) => {
    if (window?.innerWidth > 900) {
      const intersecting: boolean = entries[0]?.isIntersecting ?? false;
      entries.forEach(() => {
        if (intersecting) {
          cardRef.current?.classList.add("roll-in");
        }
      });
    }
  }, []);

  useEffect(() => {
    let observer: undefined | IntersectionObserver = undefined;
    if (cardRef.current) {
      const intersectionOptions: IntersectionObserverInit = { threshold: 0.6 };
      observer = new IntersectionObserver(intersectionCallBack, intersectionOptions);
      observer.observe(cardRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [cardRef, intersectionCallBack]);
  return (
    <section className="desc" ref={cardRef}>
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

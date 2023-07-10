import { testimonialHeading, testimonials } from "./info";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import dynamic from "next/dynamic";

export default function Testimonials() {
  const [testyIndex, setTesyIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
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
      const intersectionOptions: IntersectionObserverInit = { threshold: 0.5 };
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
    <section className="testimonials" ref={cardRef}>
      <h2>Testimonials</h2>
      <span>{testimonialHeading}</span>
      <div className="main-container">
        <div className="name-container">
          {testimonials.map((test, index) => {
            return (
              <span
                key={index}
                className={index === testyIndex ? "testy-active" : undefined}
                onClick={() => {
                  setTesyIndex(index);
                }}
              >
                {test.name}
              </span>
            );
          })}
        </div>
        <div className="testy-container">
          <div
            className="overflow-container"
            style={{
              height: `${testimonials.length * 30}vh`,
              transform: `translateY(-${testyIndex * 30}vh)`
            }}
          >
            {testimonials.map((test, index) => {
              return (
                <div
                  key={index}
                  style={{
                    height: `${100 / testimonials.length}%`
                  }}
                >
                  <span>
                    <FaQuoteLeft />
                  </span>
                  <p>{test.message}</p>
                  <span className="auth">{test.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

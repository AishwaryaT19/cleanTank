import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export default function ProjectCard({ proj }: { proj: Record<string, any> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries) => {
    if (window?.innerWidth > 900) {
      const intersecting: boolean = entries[0]?.isIntersecting ?? false;
      entries.forEach(() => {
        if (intersecting) {
          cardRef.current?.classList.add("roll-in");
        } else {
          cardRef.current?.classList.remove("roll-in");
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
    <div className="project-card" ref={cardRef}>
      <div className="img-container">
        <video autoPlay loop muted style={{ width: "100%", height: "100%" }}>
          <source src={proj.imgUrl} type="video/mp4" />
        </video>
      </div>
      <div className="stuff-container">
        <h4 className="heading">{proj.projectName}</h4>
        <p>{proj.projectDesc}</p>
      </div>
    </div>
  );
}

import { useCallback, useEffect, useRef, useMemo } from "react";
export default function ProjectCard({ proj }: { proj: Record<string, any> }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const intersectionOptions: IntersectionObserverInit = useMemo(() => ({ threshold: 0.5 }), []);
  const intersectionCallBack: IntersectionObserverCallback = useCallback((entries, obv) => {
    if (window?.innerWidth > 900) {
      const intersecting: boolean = entries[0]?.isIntersecting ?? false;
      entries.forEach(() => {
        if (intersecting) {
          cardRef.current?.classList.add("roll-in");
          obv.disconnect();
        }
      });
    }
  }, []);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(intersectionCallBack, intersectionOptions);
    const rememberedObserver = observer.current;
    if (cardRef.current) {
      observer.current.observe(cardRef.current);
    }
    return () => {
      if (rememberedObserver) {
        rememberedObserver.disconnect();
      }
    };
  }, [cardRef, intersectionCallBack, intersectionOptions, observer]);

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

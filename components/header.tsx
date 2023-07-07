import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { logo } from "./Info";
import Link from "next/link";
import useScrollPosition from "../hooks/useScroll";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { infs } from "./Info";
import { useRouter } from "next/router";
export default function Header() {
  const [mobileView, setMobileView] = useState<boolean>(false);
  const router = useRouter();
  const currentRoute = router.asPath as string;
  const headerRef = useRef<any>();
  const scrollCallback = useCallback(
    (scrollPos: number) => {
      //  currentRoute.startsWith("/projects")
      if (scrollPos > 75 || currentRoute.startsWith("/projects")) {
        (headerRef.current as HTMLElement).classList.add("dark");
        (headerRef.current as HTMLElement).classList.remove("light");
      } else {
        (headerRef.current as HTMLElement).classList.remove("dark");
        (headerRef.current as HTMLElement).classList.add("light");
      }
    },
    [currentRoute]
  );

  useScrollPosition(scrollCallback);
  return (
    <header id="header" className={currentRoute.startsWith("/projects") ? "dark" : "light"} ref={headerRef}>
      <Link className="img-container" href="/">
        <Image src={logo} alt="back" fill sizes="100%" />
      </Link>
      <nav id="navigation" className={`${mobileView ? "active" : "inactive"}`}>
        <Link className="heading" href="/" onClick={() => setMobileView(!mobileView)}>
          Home
        </Link>
        <Link className="heading" href="/about" onClick={() => setMobileView(!mobileView)}>
          About
        </Link>
        <Link className="heading" href="/process" onClick={() => setMobileView(!mobileView)}>
          Process
        </Link>
        <Link className="heading" href="/customers" onClick={() => setMobileView(!mobileView)}>
          Customers
        </Link>
        <div className={`${mobileView ? "open" : "close"} socials`}>
          <Link
            className="heading"
            href={"https://api.whatsapp.com/send?phone=" + infs[0].number + ""}
            onClick={() => setMobileView(!mobileView)}
          >
            <FaWhatsapp />
          </Link>
          <Link className="heading" href={"tel:" + infs[0].number} onClick={() => setMobileView(!mobileView)}>
            <FaPhone />
          </Link>
          <Link className="heading" href={"mailto:" + infs[0].email} onClick={() => setMobileView(!mobileView)}>
            <FaEnvelope />
          </Link>
        </div>
      </nav>
      <div className={`${mobileView ? "open" : "close"} burger`} onClick={() => setMobileView(!mobileView)}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </header>
  );
}

import Image from "next/image";
import React from "react";
import { clientHead, clientPic, clients } from "./info";
import Link from "next/link";

export default function Clients() {
  return (
    <section className="services">
      <div className="img-container">
        <Image src={clientPic} alt="Customers" fill sizes="100%" />
        <span className="overlay"></span>
      </div>
      <div className="stuff-container">
        <span>Clients</span>
        <h4>{clientHead}</h4>
        <div className="cards-wrapper">
          <div className="cards-container">
            {clients.slice(0, 10).map((ser, index) => {
              return (
                <div className="card" key={index}>
                  <div className="img-container">
                    <Image alt={ser.clientHead} src={ser.clientImage} fill sizes="100%" />
                  </div>
                </div>
              );
            })}
            {clients.slice(4, 10).map((ser, index) => {
              return (
                <div className="card" key={index}>
                  <div className="img-container">
                    <Image alt={ser.clientHead} src={ser.clientImage} fill sizes="100%" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Link href="/customers" className="cust">
          Explore more
        </Link>
      </div>
    </section>
  );
}

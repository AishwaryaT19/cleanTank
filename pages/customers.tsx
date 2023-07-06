import { clientCategorys, clientHead, clients } from "modules/about/client/info";
import Image from "next/image";
import React from "react";

export default function Customers() {
  return (
    <section id="Customers">
      <h2>Customers</h2>
      <span>{clientHead}</span>
      <div className="component-container">
        {clientCategorys.map((elem, index) => {
          return (
            <div className="type-container" key={index}>
              <h2>{elem.type}</h2>
              <div className="card-container">
                {clients.map((elems, ind) => {
                  if (elems.clientType == elem.type) {
                    return (
                      <div key={ind} className="card">
                        <div className="img-container">
                          <Image src={elems.clientImage} alt={elems.clientHead} sizes="100%" fill />
                        </div>
                        <div className="stuff-container">
                          <h3>{elems.clientHead}</h3>
                        </div>
                      </div>
                    );
                  } else return <></>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

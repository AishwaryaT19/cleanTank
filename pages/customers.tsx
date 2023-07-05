import { clientCategorys, clientHead } from "modules/about/client/info";
import React from "react";

export default function Customers() {
  return (
    <section id="Customers">
      <h2>{clientHead}</h2>
      <div className="component-container">
        {clientCategorys.map((elem, index) => {
          return (
            <div className="type" key={index}>
              <h2>{elem.type}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

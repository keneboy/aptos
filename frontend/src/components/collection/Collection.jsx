import React from "react";
// import Img from "react-optimized-image";
import collectionData from "./collectionData";
export default function Collection() {
  return (
    <section className="collection" id="collection">
      <h1>Our Collection</h1>
      <ul>
        {collectionData.map((item, index) => {
          return (
            <li key={index}>
              <img src={item.image} alt="" />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

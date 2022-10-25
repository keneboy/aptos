import React from "react";

export default function Sidenav({ active, handleClose }) {
  console.log(active);
  return (
    <div className={active ? "sidenav active" : "sidenav"}>
      <ul className="navigation">
        <li>
          <a href="#" onClick={handleClose}>
            Launch App
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#story">Story</a>
        </li>
        <li>
          <a href="#collection">Collection</a>
        </li>
        <li>
          <a href="#road">Road Map</a>
        </li>
      </ul>
    </div>
  );
}

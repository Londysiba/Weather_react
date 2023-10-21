import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cape Town" />

        <footer>
          
          <a
            href="https://github.com/Londysiba/weather_react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub repository
          </a>{" "}
          Coded by Londeka Dlamini
        </footer>
      </div>
    </div>
  );
}
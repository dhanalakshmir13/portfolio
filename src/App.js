import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievement from "./components/Achivement";

function App() {
  useEffect(() => {
    const sparkContainer = document.querySelector(".spark-container");
    for (let i = 0; i < 50; i++) {
      let spark = document.createElement("div");
      spark.className = "spark";
      spark.style.left = `${Math.random() * 100}%`;
      spark.style.top = `${Math.random() * 100}%`;
      spark.style.animationDuration = `${Math.random() * 2 + 1}s`;
      sparkContainer.appendChild(spark);
    }
  }, []);

  return (
    <>
      <div className="app-container">
        <div className="spark-container"></div>
        <Header />
        <Hero />
        <About />
        <Achievement/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

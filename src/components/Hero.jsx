// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";

import mountains from "../assets/mountains.jpg";
import moon from "../assets/moon.jpg";
import mist from "../assets/mist.png";
import fogVideo from "../assets/fog.mp4";

export default function Hero() {

  const scrollToAbout = () => {
    scroller.scrollTo("aboutSection", {
      smooth: true,
      duration: 1200,
      offset: -40,
    });
  };

  return (
    <section className="hero">

      {/* 🌫 Fog Video */}
      <video className="fogVideo" src={fogVideo} autoPlay muted playsInline />

      {/* 🔼 Navbar */}
<nav className="nav">
  <a onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
    Home
  </a>

  <a onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}>
    About
  </a>

  <a onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
    Projects
  </a>

  <a onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>
    Contact
  </a>
</nav>


      {/* 🏔 Background */}
      <img src={mountains} className="mountains" />

      

      {/* ✨ Text fade after moon arrives */}
      <motion.div
        className="textOnMoon"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 1.1 }}
        style={{ pointerEvents: "none" }}
      >
        <p className="hello">HELLO!</p>
        <p className="welcome">Welcome to my</p>
        <h1 className="title">Portfolio</h1>
        <div style={{ marginTop: "14px" }} />
        
      </motion.div>

     <motion.img
  src={moon}
  className="moon"
  initial={{ y: "-45vh", opacity: 0 }}       // start above screen
  animate={{ y: "14vh", opacity: 1 }}        // land beautifully centered
  transition={{ duration: 1.4, ease: "easeOut" }}
/>



    </section>
  );
}

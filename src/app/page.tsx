import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Members from "./components/Members";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Sponsors />
        <About />
        <ChairmanMessage />
        <Members />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;

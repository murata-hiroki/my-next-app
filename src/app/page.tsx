import React from "react";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Members from "./components/Members";
import Services from "./components/Services";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <Sponsors />
        <About />
        <ChairmanMessage />
        <Members />
        <Services />
        <Blog />
      </main>
    </div>
  );
}

export default App;

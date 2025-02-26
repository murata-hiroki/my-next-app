import React from "react";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors";
import About from "./components/About";
import ChairmanMessage from "./components/ChairmanMessage";
import Services from "./components/Services";
import News from "./components/News";
import History from "./components/History";
import Joining from "./components/Joining";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <Hero />
        <News />
        <Services />
        <About />
        <History />
        <ChairmanMessage />
        <Sponsors />
        <Joining />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Art from "./Pages/Art/Art";
import Design from "./Pages/Design/Design";
import Quiz from "./Pages/Quiz/Quiz";
import Theory from "./Pages/Theory/Theory";
import SeaTurtle from "./Pages/InfoCards/PagesInfoCards/SeaTurles/SeaTurtle";
import Sharks from "./Pages/InfoCards/PagesInfoCards/Sharks/Sharks";
import Tips from "./Pages/InfoCards/PagesInfoCards/Tips/Tips";
import Whales from "./Pages/InfoCards/PagesInfoCards/Whales/Whales";
import Dolphins from "./Pages/InfoCards/PagesInfoCards/Dolphins/Dolphins";
import InfoCards from "./Pages/InfoCards/InfoCards";
import "./App.css"; // Import the CSS file
import Footer from "./Components/Footer/Footer";
import PollutionStats from "./Pages/Home/PollutionStats";
import CuteFish from "./Pages/InfoCards/PagesInfoCards/CuteFish/CuteFish";

const App = () => {
  const pages = [
    { name: "Home", route: "" },
    { name: "Design", route: "design" },
    { name: "Art", route: "art" },
    { name: "Quiz", route: "quiz" },
    { name: "Theory", route: "theory" },
  ];

  return (
    <main className="app">
      <BrowserRouter>
        <Navbar pages={pages} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/design" element={<Design />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/seaturtle" element={<SeaTurtle />} />
          <Route path="/sharks" element={<Sharks />} />
          <Route path="/whales" element={<Whales />} />
          <Route path="/dolphins" element={<Dolphins />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/infocards" element={<InfoCards />} />
          <Route path="/pollutionstats" element={<PollutionStats />} />
          <Route path="/fish" element={<CuteFish />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;

import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";
import Art from "./Pages/Art/Art";
import Design from "./Pages/Design/Design";
import Quiz from "./Pages/Quiz/Quiz";
import Theory from "./Pages/Theory/Theory";
import SeaTurtle from "./Pages/SeaTurles/SeaTurtle";
const App = () => {
  const pages = [
    { name: "Home", route: "" },
    { name: "Design", route: "design" },
    { name: "Art", route: "art" },
    { name: "Quiz", route: "quiz" },
    { name: "Theory", route: "theory" },
  ];
  return (
    <>
      <BrowserRouter>
        <Navbar pages={pages} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/design" element={<Design />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/seaturtle" element={<SeaTurtle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

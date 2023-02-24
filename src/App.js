import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import React from "./Pages/react";
import Java from "./Pages/java";
import Life from "./Pages/life";
import Netflix from "./Pages/netflix";

const App = () => {
 return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<React />} />
        <Route path="/java" element={<Java />} />
        <Route path="/life" element={<Life />} />
        <Route path="/netflix" element={<Netflix />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
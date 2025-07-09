import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./assets/pages/Home/sections/Hero/Hero";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />

      </Routes>
    </Router>
  );
}

export default App;

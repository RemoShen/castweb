import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Gallery from "./components/Gallery/Gallery";
import Tutorial from "./components/Tutorial/Tutorial";
import About from "./components/About/About";
import Userstudy from "./components/Userstudy/Userstudy";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/user-study" element={<Userstudy />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="resume" element={<Resume />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/organisms/NavBar";
import HomePage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import PassionsPage from "./pages/PassionsPage";
import NewsScraperPage from "./pages/NewsScraperPage";

function App() {
  return (
    <BrowserRouter>
      <div className="my-app">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/passions" element={<PassionsPage />} />
          <Route path="/news-scraper" element={<NewsScraperPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
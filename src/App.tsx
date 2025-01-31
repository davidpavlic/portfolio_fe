import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import HomePage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import PassionsPage from "./pages/PassionsPage";
import NewsScraperPage from "./pages/NewsScraperPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/passions" element={<PassionsPage />} />
          <Route path="/news-scraper" element={<NewsScraperPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
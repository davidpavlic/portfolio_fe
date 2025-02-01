import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyNavBar } from "./components/organisms/MyNavBar";
import HomePage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
import PassionsPage from "./pages/PassionsPage";
import NewsScraperPage from "./pages/NewsScraperPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="my-app">
        <MyNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/passions" element={<PassionsPage />} />
          <Route path="/news-scraper" element={<NewsScraperPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
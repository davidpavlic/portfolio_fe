import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyNavBar } from "./components/organisms/MyNavBar";
import { ThemeProvider } from './config/MyThemeProvider';
import MainPage from "./pages/MainPage";
import ProjectsPage from "./pages/ProjectsPage";
//import PassionsPage from "./pages/PassionsPage";
//import NewsScraperPage from "./pages/NewsScraperPage";
import PageNotFound from "./pages/PageNotFound";
import WorkInProgressPage from './pages/WorkInProgressPage';

function App() {
  return (
    /* Responsible for Dark-/Lightmode */
    <ThemeProvider>
      <BrowserRouter>
        <div className="my-app">
          <MyNavBar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/passions" element={<WorkInProgressPage />} />
            <Route path="/news-scraper" element={<WorkInProgressPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
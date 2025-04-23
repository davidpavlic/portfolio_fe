import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { MyNavBar } from './components/organisms/MyNavBar';
import MainPage from './pages/MainPage';
import ProjectsPage from './pages/ProjectsPage';
import MyLLMPage from './pages/MyLLMPage';
import PageNotFound from './pages/PageNotFound';
import WorkInProgressPage from './pages/WorkInProgressPage';
//import NewsScraperPage from './pages/NewsScraperPage';

function App() {
  return (
    <main>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/news-scraper" element={<WorkInProgressPage />} />
        <Route path="/my-llm" element={<MyLLMPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default App;
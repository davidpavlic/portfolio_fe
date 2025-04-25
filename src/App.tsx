import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { MyNavBar } from './components/organisms/common/MyNavBar';
import MainPage from './pages/MyMainPage';
import ProjectsPage from './pages/MyProjectsPage';
import MyLLMPage from './pages/MyLLMPage';
import PageNotFound from './pages/MyPageNotFound';
import WorkInProgressPage from './pages/MyWorkInProgressPage';
//import NewsScraperPage from './pages/NewsScraperPage';

function App() {
  return (
    <main>
      <MyNavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/news-scraper' element={<WorkInProgressPage />} />
        <Route path='/my-llm' element={<MyLLMPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  );
};

export default App;
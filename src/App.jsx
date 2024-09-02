import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MenuMovie from './pages/MenuMovie';
import MovieListDetail from './components/MovieListDetail';
import NotFoundPage from './pages/components/NotFoundPage';
import MenuSeries from './pages/MenuSeries';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<NotFoundPage />} />
      <Route path='/movie' element={<MenuMovie />} />
      <Route path='/tv' element={<MenuSeries />} />
      <Route path='/movie/:id' element={<MovieListDetail />} />
    </Routes>
  );
}

export default App;

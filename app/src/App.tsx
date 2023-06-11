import { Route, Routes } from 'react-router-dom'
import './App.css';
import { Layout } from './Pages/Layout';
import { TitlePage } from './Pages/TitlePage';
import { NotFound } from './Pages/NotFound';
import { SavesBooks } from './Pages/SavesBooks';
import { SinglePage } from './Pages/SinglePage';
import { HomePage } from './Pages/HomePage';
import { AuthRoute } from './Pages/AuthRoute';
import { LoginPage } from './Pages/LoginPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<TitlePage />} />
          <Route path='title' element={<TitlePage />} />
          <Route path='savesBooks' element={<SavesBooks />} />
          <Route path='singlePage' element={<SinglePage />} />
          <Route path='*' element={<NotFound />} />
          <Route
            path='/auth'
            element={
              <AuthRoute>
                <HomePage />
              </AuthRoute>} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export { App, HomePage, AboutPage };

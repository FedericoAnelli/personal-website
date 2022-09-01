import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import SectionContainer from './components/SectionContainer/SectionContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<SectionContainer />} />
        <Route path="*" element={<SectionContainer />} />
        <Route path="/section/:section" element={<SectionContainer />} />
      </Routes>
    </div>
  );
}

export default App;

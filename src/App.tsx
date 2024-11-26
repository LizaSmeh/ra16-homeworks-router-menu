import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
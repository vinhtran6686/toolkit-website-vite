// toolkit-website-vite/src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Import the HomePage component
import DateCalculationPage from "./pages/DateCalculationPage";
import DifferenceNumberCalculationPage from "./pages/DifferenceNumberCalculationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Add the HomePage route */}
        <Route path="/date-calculation" element={<DateCalculationPage />} />
        <Route
          path="/difference-number-calculation"
          element={<DifferenceNumberCalculationPage />}
        />
      </Routes>
    </div>
  );
}

export default App;

import CoverPage from "./Components/pages/CoverPage";
import { Route, Routes } from "react-router-dom";
import CVPage from "./Components/pages/CVPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<CoverPage />} />
        {/* <Route path="/reservations" element={<Modules />} /> */}
        <Route path="/cv-details" element={<CVPage />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import StrategicAxes from "./pages/StrategicAxes.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/strategic-axes" element={<StrategicAxes />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
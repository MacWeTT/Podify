import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Components/Navbar";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

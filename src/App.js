import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

import "./App.css";

const App = () => {
  return (
    <Router>
      <nav>
        <div className="link-element">
          <Link to="/">Home</Link>
        </div>

        <div className="link-element">
          <Link to="/diary">Diary</Link>
        </div>

        <div className="link-element">
          <Link to="/analytics">Analytics</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

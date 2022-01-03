import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

import "./App.css";

const App = () => {
  const [deleted, setDeleted] = useState([]);
  const [postponed, setPostponed] = useState([]);

  const checkResults = ({ done, deleted, postponed }) => {
    console.log("I talk from the app", done);
    console.log("I talk from the app deleted", deleted);
    console.log("I talk from the app postponed", postponed);
    // setDone(done);
    setDeleted(deleted);
    setPostponed(postponed);
  };

  // useEffect(() => {
  //   checkResults();
  // }, [{ done }, { deleted }, { postponed }]);

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/diary">Diary</Link>
        <Link to="/analytics">Analytics</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary checkResults={checkResults} />} />
        <Route
          path="/analytics"
          element={<Analytics deleted={deleted} postponed={postponed} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

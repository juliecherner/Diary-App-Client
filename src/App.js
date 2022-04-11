import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Header from "./Components/header/Header";
import "./App.scss";

const App = () => {
  const state = useSelector((state) => state);

  return (
    <Router>
      <Header />
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

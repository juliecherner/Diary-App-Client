import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "./store/actions/todos.actions";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import MyAdvice from "./pages/myAdvice/MyAdvice";
import Header from "./pages/header/Header";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/my-advice" element={<MyAdvice />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;

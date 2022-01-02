import "./App.css";
import Diary from "./pages/diary/Diary";
import Analytics from "./pages/analytics/Analytics";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";

const App = () => {
  const [done, setDone] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [postponed, setPostponed] = useState([]);

  const checkResults = ({ done, deleted, postponed }) => {
    console.log("I talk from the app", done);
    console.log("I talk from the app deleted", deleted);
    console.log("I talk from the app postponed", postponed);
    setDone(done);
    setDeleted(deleted);
    setPostponed(postponed);
  };

  // useEffect(() => {
  //   checkResults();
  // }, [{ done }, { deleted }, { postponed }]);

  return (
    <div>
      <Home />
      <Diary checkResults={checkResults} />
      <Analytics done={done} deleted={deleted} postponed={postponed} />
    </div>
  );
};

export default App;

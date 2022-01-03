import { useState, useEffect } from "react";
import ResultsBlock from "../../Components/resultsBlock/ResultsBlock";
import Chart from "../../Components/chart/Chart";

const Analytics = () => {
  const [done, setDone] = useState(() => {
    const savedDone = localStorage.getItem("done") || "[]";
    console.log("savedDone", savedDone);
    const todosArray = JSON.parse(savedDone);
    return todosArray;
  });

  const [postponed, setPostponed] = useState(() => {
    const savedPostponed = localStorage.getItem("postponed") || "[]";
    const todosArray = JSON.parse(savedPostponed);
    return todosArray;
  });

  const [deleted, setDeleted] = useState(() => {
    const deletedPostponed = localStorage.getItem("deleted") || "[]";
    const todosArray = JSON.parse(deletedPostponed);
    return todosArray;
  });

  const getTotalNumber = () => {
    return done.length + postponed.length + deleted.length;
  };

  return (
    <div>
      <div>I'm analitika</div>
      <ResultsBlock data={done} name="Done" total={getTotalNumber()} />
      <ResultsBlock data={deleted} name="Deleted" total={getTotalNumber()} />
      <ResultsBlock
        data={postponed}
        name="Postponed"
        total={getTotalNumber()}
      />
      <Chart done={done} deleted={deleted} postponed={postponed} />
    </div>
  );
};

export default Analytics;

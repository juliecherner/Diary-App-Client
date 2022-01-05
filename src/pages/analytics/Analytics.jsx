import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResultsBlock from "../../Components/resultsBlock/ResultsBlock";
import Chart from "../../Components/analyticsChart/analyticsChart";
import Warning from "../../Components/warning/Warning";
import Button from "@mui/material/Button";

const Analytics = () => {
  const [showChart, setShowChart] = useState(false);
  const [tasksLength, setTasksLength] = useState(0);

  const [done, setDone] = useState(() => {
    const savedDone = localStorage.getItem("done") || "[]";
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

  const [todos, setTodos] = useState(() => {
    const todoItems = localStorage.getItem("todos") || "[]";
    const todosArray = JSON.parse(todoItems);
    return todosArray;
  });

  useEffect(() => {
    setTasksLength(
      done.length + postponed.length + deleted.length + todos.length
    );
  });

  return (
    <div>
      {tasksLength ? (
        <div>
          <div>Total {tasksLength} todos</div>
          <Warning
            done={done}
            postponed={postponed}
            todos={todos}
            deleted={deleted}
            total={tasksLength}
          />
          <ResultsBlock
            data={todos}
            name="InProgress"
            total={tasksLength}
            color="pink"
          />
          <ResultsBlock
            data={done}
            name="Done"
            total={tasksLength}
            color="green"
          />
          <ResultsBlock
            data={deleted}
            name="Deleted"
            total={tasksLength}
            color="red"
          />
          <ResultsBlock
            data={postponed}
            name="Postponed"
            total={tasksLength}
            color="yellow"
          />
          <Button variant="text" onClick={() => setShowChart(!showChart)}>
            {showChart ? <div>Hide a diagram</div> : <div>Show a diagram</div>}
          </Button>

          {showChart && (
            <div>
              <Chart
                data={[
                  done.length,
                  deleted.length,
                  postponed.length,
                  todos.length,
                ]}
                labels={["Done", "Deleted", "Postponed", "InProgress"]}
              />
            </div>
          )}
        </div>
      ) : (
        <div>
          You don't have marked todos.
          <Link to="/diary">Mark your progress in diary</Link>
        </div>
      )}
    </div>
  );
};

export default Analytics;

import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ResultsBlock from "./components/resultsBlock/ResultsBlock";
import Chart from "./components/analyticsChart/analyticsChart";
import Warning from "./components/warning/Warning";
import Button from "@mui/material/Button";
import "./analytics.scss";

const Analytics = () => {
  const todos = useSelector((state) => state.todosState);
  const [showChart, setShowChart] = useState(false);

  const inProgress = todos.filter((todo) => todo.list === "inProgress");
  const done = todos.filter((todo) => todo.list === "done");
  const postponed = todos.filter((todo) => todo.list === "postponed");
  const deleted = todos.filter((todo) => todo.list === "deleted");

  return (
    <div className="analytics">
      {todos.length ? (
        <div>
          <div className="total">
            Total: <span>{todos.length} todos</span>
          </div>
          <Warning
            doneLength={done.length}
            postponedLength={postponed.length}
            deletedLength={deleted.length}
            inProgressLength={inProgress.length}
            totalLength={todos.length}
          />
          <div className="analytics-results-area">
            <ResultsBlock
              data={inProgress}
              name="In Progress"
              total={todos.length}
              color="lightblue"
            />
            <ResultsBlock
              data={done}
              name="Done"
              total={todos.length}
              color="green"
            />
            <ResultsBlock
              data={deleted}
              name="Deleted"
              total={todos.length}
              color="red"
            />
            <ResultsBlock
              data={postponed}
              name="Postponed"
              total={todos.length}
              color="yellow"
            />
          </div>
          <div className="analytics--button">
            <Button
              variant="contained"
              color="success"
              onClick={() => setShowChart(!showChart)}
            >
              {showChart ? (
                <div>Hide a diagram</div>
              ) : (
                <div>Show a diagram</div>
              )}
            </Button>
          </div>

          {showChart && (
            <div className="analytics-chart">
              <Chart
                data={[
                  done.length,
                  deleted.length,
                  postponed.length,
                  inProgress.length,
                ]}
                labels={["Done", "Deleted", "Postponed", "In progress"]}
              />
            </div>
          )}
        </div>
      ) : (
        <div className="analytics-empty">
          <div>You don't have todos.</div>
          <div className="analytics-empty-link">
            <Link to="/diary">Mark your progress in diary</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;

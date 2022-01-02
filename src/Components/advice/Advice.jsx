import react from "react";
import "./advice.css";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddTaskIcon from "@mui/icons-material/AddTask";

const Advice = ({ object, deleteAdvice, visibility, setAdviceToList }) => {
  return (
    <div>
      {visibility && (
        <div className="advice">
          <div>{object.todo}</div>
          <div className="advice-buttons">
            <button onClick={setAdviceToList}>
              <AddTaskIcon /> Good, add to list
            </button>
            <button onClick={deleteAdvice}>
              <NotInterestedIcon /> Bad, delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advice;

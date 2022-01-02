import react from "react";
import "./advice.css";

const Advice = ({ object, deleteAdvice, visibility, setAdviceToList }) => {
  return (
    <div className="advice">
      {visibility && (
        <div>
          <div>{object.todo}</div>
          <button onClick={setAdviceToList}>Good, set to list</button>
          <button onClick={deleteAdvice}>Bad, delete</button>
        </div>
      )}
    </div>
  );
};

export default Advice;

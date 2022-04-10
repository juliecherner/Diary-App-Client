import react from "react";
import "./advice.scss";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const Advice = ({ object, deleteAdvice, visibility, setAdviceToList }) => {
  return (
    <div>
      {visibility && (
        <div className="advice">
          <div className="advice-text">{object.todo}</div>
          <div className="advice-buttons">
            <ButtonGroup>
              <Button
                onClick={setAdviceToList}
                variant="outlined"
                color="success"
                size="medium"
              >
                <AddTaskIcon /> Good advice
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={deleteAdvice}
                size="medium"
              >
                <NotInterestedIcon /> Bad advice
              </Button>
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advice;

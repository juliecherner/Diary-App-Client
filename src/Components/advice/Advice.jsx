import NotInterestedIcon from "@mui/icons-material/NotInterested";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./advice.scss";

const Advice = ({ object, deleteAdvice, visibility, setAdviceToList }) => {
  const adviceConstants = [
    {
      color: "success",
      function: setAdviceToList,
      text: "Good advice",
      icon: <AddTaskIcon />,
    },
    {
      color: "error",
      function: deleteAdvice,
      text: "Bad advice",
      icon: <NotInterestedIcon />,
    },
  ];
  return (
    <div>
      {visibility && (
        <div className="advice">
          <div className="advice-text">{object.todo}</div>
          <div className="advice-buttons">
            <ButtonGroup>
              {adviceConstants.map((constant) => (
                <Button
                  key={constant.text}
                  onClick={constant.function}
                  color={constant.color}
                  variant="outlined"
                  size="medium"
                >
                  {constant.icon} {constant.text}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advice;

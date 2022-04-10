import DoneIcon from "@mui/icons-material/Done";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import "./area.scss";

const Area = ({ name, text, color }) => {
  return (
    <div className="area" style={{ backgroundColor: color }}>
      {name === "Done" ? <DoneIcon /> : <PauseCircleOutlineIcon />}
      <div>{text}</div>
    </div>
  );
};

export default Area;

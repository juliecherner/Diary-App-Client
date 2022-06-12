import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getAdvice,
  deleteAdvice,
} from "../../../../store/actions/advice.action";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import "./advice-list.scss";

export const AdviceList = () => {
  const dispatch = useDispatch();
  const allAdvice = useSelector((state) => state.adviceState);

  const handleDelete = (id) => {
    dispatch(deleteAdvice(id));
    dispatch(getAdvice());
  };

  useEffect(() => {
    dispatch(getAdvice());
  }, [dispatch]);

  return (
    <div className="my-advice-list">
      {allAdvice.map((advice) => (
        <div key={advice._id} className="my-advice-list-item">
          {advice.text}
          <CloseOutlinedIcon
            color="error"
            onClick={() => handleDelete(advice._id)}
          />
        </div>
      ))}
    </div>
  );
};

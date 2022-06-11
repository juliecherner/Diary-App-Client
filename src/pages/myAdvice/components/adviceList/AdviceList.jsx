import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAdvice, deleteAdvice } from "../../store/actions/advice.action";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

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
    <div>
      {allAdvice.map((advice) => (
        <div key={advice._id}>
          {advice.text}
          <CloseOutlinedIcon onClick={() => handleDelete(advice._id)} />
        </div>
      ))}
    </div>
  );
};

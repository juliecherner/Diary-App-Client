import { AdviceList } from "./components/adviceList/AdviceList";
import { NewAdvice } from "./components/newAdvice/NewAdvice";
import "./my-advice.scss";

const MyAdvice = () => {
  return (
    <div className="my-advice">
      <span className="my-advice-title">My advice</span>
      <AdviceList />
      <NewAdvice />
    </div>
  );
};

export default MyAdvice;

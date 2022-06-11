import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  const todosInProgress = useSelector((state) =>
    state.todosState.filter((todo) => todo.list === "inProgress")
  );

  return (
    <div className="homepage">
      <div className="homepage-titles">
        <div className="homepage-title1"> Track your plans </div>
        <div className="homepage-title2">and get things done </div>
      </div>
      <div>
        <div className="home--welcome">Welcome back!</div>
        {todosInProgress.length === 1 ? (
          <div className="home--progress">
            You have <span>{todosInProgress.length} todo</span> in progress
          </div>
        ) : (
          <div className="home--progress">
            You have <span>{todosInProgress.length} todos</span> in progress
          </div>
        )}

        <div className="home--link">
          <Link to="/diary">Check the diary</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

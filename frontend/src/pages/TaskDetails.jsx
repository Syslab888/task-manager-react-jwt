import { CircleArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/TaskDetails.css";

function TaskDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const task = location.state;

  return (
    <div className="task-details-page">
      <div className="task-details-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Return
        </button>

        <div className="task-details-card">
          <h1>{task?.title}</h1>
          <p>{task?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;

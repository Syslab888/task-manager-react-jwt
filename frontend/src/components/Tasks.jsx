import "../styles/Tasks.css";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, deleteTask }) {
  const navigate = useNavigate();

  return (
    <div className="tasks-container">
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <div className="task-content" onClick={() => onTaskClick(task.id)}>
            <h3
              style={{
                textDecoration: task.isCompleted ? "line-through" : "none",
              }}
            >
              {task.title}
            </h3>

            <p>{task.description}</p>
          </div>

          <div className="task-actions">
            <button onClick={() => onTaskClick(task.id)}>
              {task.isCompleted ? "✔" : "❌"}
            </button>

            <button onClick={() => navigate("/task-details", { state: task })}>
              🔍
            </button>

            <button onClick={() => deleteTask(task.id)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

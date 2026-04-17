import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";
import "../App.css";
import Tasks from "../components/Tasks";
import AddTasks from "../components/AddTasks";
import "../styles/Tasks.css";
import { v4 } from "uuid";

//SE QUISER VER ESTILIZAÇÃO EM COMPONENTE SEPARADO UTILIZADO PROPS, RETOMAR A PARTIR DE 1.55
function TasksPage() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("lista_de_tarefas")) || [],
  );

  // 🔐 PROTEÇÃO DE ROTA
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("lista_de_tarefas", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((tarefa) => {
      if (tarefa.id == taskId) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      } else {
        return tarefa;
      }
    });
    setTasks(newTasks);
  }

  function deleteTask(deletada) {
    const newTasks = tasks.filter((tarefa) => tarefa.id != deletada);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    console.log("title:", title, "description:", description);
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleLogout() {
    logout(); // remove token
    navigate("/"); // volta pro login
  }

  return (
    <div className="tasks-page">
      <div className="tasks-container-main">
        {/* 🧠 HEADER NOVO */}
        <div className="header">
          <h1>Task Manager</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>

        {/* resto do conteúdo */}
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default TasksPage;

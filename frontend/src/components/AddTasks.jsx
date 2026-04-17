import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="add-task-card">
      <form className="flex gap-2">
        <input
          type="text"
          placeholder="Digite o nome da tarefa"
          className="border-slate-300 outline-slate-400 px-1 py-2 rounded-md mr-6"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
        ></input>
        <input
          type="text"
          placeholder="Digite a descrição da tarefa"
          className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            setError("");
          }}
        ></input>
      </form>
      {error && (
        <p style={{ color: "salmon", fontSize: "13px", marginTop: "5px" }}>
          {error}
        </p>
      )}
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            setError("Preencha o título e a descrição da tarefa.");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;

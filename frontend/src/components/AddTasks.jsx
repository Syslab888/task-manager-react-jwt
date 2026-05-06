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
          placeholder="Type the task name."
          className="border-slate-300 outline-slate-400 px-1 py-2 rounded-md mr-6"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setError("");
          }}
        ></input>
        <input
          type="text"
          placeholder="Type the task description."
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
            setError("Enter the task title and description.");
            return;
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Add
      </button>
    </div>
  );
}

export default AddTasks;

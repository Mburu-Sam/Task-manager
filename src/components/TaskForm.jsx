import { useState } from "react";
import { useTasks } from "../context/TaskContext.jsx";

export default function TaskForm({ onAdded }) {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");

  function submit(e) {
    e.preventDefault();
    const v = title.trim();
    if (!v) return;
    addTask(v, category, priority);
    setTitle("");
    setCategory("General");
    setPriority("Medium");
    if (onAdded) onAdded();
  }

  return (
    <form className="task-form" onSubmit={submit}>
      <input
        className="input"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <select className="select" value={category} onChange={e => setCategory(e.target.value)}>
        <option>General</option>
        <option>Work</option>
        <option>Personal</option>
        <option>Home</option>
        <option>School</option>
      </select>

      <select className="select" value={priority} onChange={e => setPriority(e.target.value)}>
        <option>High</option>
        <option>Medium</option>
        <option>Low</option>
      </select>

      <button className="btn" type="submit">Add</button>
    </form>
  );
}

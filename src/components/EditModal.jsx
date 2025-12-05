import { useEffect, useState } from "react";

export default function EditModal({ task, onSave, onClose }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setCategory(task.category || "General");
      setPriority(task.priority || "Medium");
    }
  }, [task]);

  if (!task) return null;

  function submit(e) {
    e.preventDefault();
    const v = title.trim();
    if (!v) return;
    onSave(task.id, { title: v, category, priority });
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Edit Task</h3>

        <form onSubmit={submit}>
          <input className="input" value={title} onChange={e => setTitle(e.target.value)} />

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

          <div className="modal-buttons">
            <button className="btn" type="submit">Save</button>
            <button className="btn muted" type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

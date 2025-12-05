import { useMemo, useState } from "react";
import { useTasks } from "../context/TaskContext.jsx";
import TaskForm from "../components/TaskForm.jsx";
import TaskItem from "../components/TaskItem.jsx";
import EditModal from "../components/EditModal.jsx";

export default function Tasks() {
  const { tasks, addTask, updateTask, deleteTask, toggleTask } = useTasks();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const perPage = 6;
  const [editing, setEditing] = useState(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return tasks.filter(t => {
      const matchesSearch = q === "" || t.title.toLowerCase().includes(q);
      const matchesFilter =
        filter === "all" ||
        (filter === "completed" && t.completed) ||
        (filter === "pending" && !t.completed) ||
        (filter === "high" && t.priority.toLowerCase() === "high");
      return matchesSearch && matchesFilter;
    });
  }, [tasks, search, filter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  return (
    <div className="page">
      <h2>Tasks</h2>

      <div className="controls">
        <input className="input" placeholder="Search tasks" value={search} onChange={e => setSearch(e.target.value)} />
        <select className="select" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="high">High priority</option>
        </select>
      </div>

      <TaskForm onAdded={() => setPage(1)} />

      <div className="list">
        {pageItems.length === 0 && <p className="muted">No tasks found.</p>}
        {pageItems.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onEdit={t => setEditing(t)}
            onDelete={deleteTask}
          />
        ))}
      </div>

      <div className="pagination">
        <button className="btn muted" onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}>Prev</button>
        <div className="page-info">{page} / {totalPages}</div>
        <button className="btn" onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}>Next</button>
      </div>

      <EditModal
        task={editing}
        onSave={(id, data) => {
          updateTask(id, data);
          setEditing(null);
        }}
        onClose={() => setEditing(null)}
      />

      <button
        className="floating-add-btn"
        onClick={() => {
          // open quick add modal by setting editing null and focusing form on screen
          window.scrollTo({ top: 0, behavior: "smooth" });
          const firstInput = document.querySelector(".task-form .input");
          if (firstInput) firstInput.focus();
        }}
        aria-label="add task"
      >
        +
      </button>
    </div>
  );
}

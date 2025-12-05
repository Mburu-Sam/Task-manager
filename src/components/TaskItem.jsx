export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <div className="task-item" id={`task-${task.id}`}>
      <div className="task-left">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <div className="task-meta">
          <div className={`task-title ${task.completed ? "completed" : ""}`}>{task.title}</div>
          <div className="task-sub">
            <span className="chip">{task.category}</span>
            <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
          </div>
        </div>
      </div>

      <div className="task-actions">
        <button className="btn small" onClick={() => onEdit(task)}>Edit</button>
        <button className="btn small danger" onClick={() => {
          const el = document.getElementById(`task-${task.id}`);
          if (el) el.classList.add("removing");
          setTimeout(() => onDelete(task.id), 240);
        }}>Delete</button>
      </div>
    </div>
  );
}

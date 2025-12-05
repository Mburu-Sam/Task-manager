import { useMemo } from "react";
import { useTasks } from "../context/TaskContext.jsx";

export default function Dashboard() {
  const { tasks } = useTasks();

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    const high = tasks.filter(t => t.priority === "High").length;
    return { total, completed, pending, high };
  }, [tasks]);

  return (
    <div className="page">
      <h2>Dashboard</h2>

      <div className="stats-grid">
        <div className="card">
          <h4>Total</h4>
          <p className="stat-value">{stats.total}</p>
        </div>

        <div className="card">
          <h4>Completed</h4>
          <p className="stat-value">{stats.completed}</p>
        </div>

        <div className="card">
          <h4>Pending</h4>
          <p className="stat-value">{stats.pending}</p>
        </div>

        <div className="card">
          <h4>High priority</h4>
          <p className="stat-value">{stats.high}</p>
        </div>
      </div>
    </div>
  );
}

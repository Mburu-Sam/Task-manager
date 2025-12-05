import { NavLink } from "react-router-dom";
import { useTasks } from "../context/TaskContext.jsx";

export default function Sidebar() {
  const { darkMode, setDarkMode } = useTasks();

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <h1 className="brand">TaskManager</h1>
        <div
          role="button"
          tabIndex={0}
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          onKeyDown={(e) => { if (e.key === "Enter") setDarkMode(!darkMode); }}
          aria-label="toggle theme"
        >
          <div className="circle" />
        </div>
      </div>

      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Dashboard
        </NavLink>
        <NavLink to="/tasks" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Tasks
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Settings
        </NavLink>
      </nav>

      <footer className="sidebar-footer">
        <small>Local storage</small>
      </footer>
    </aside>
  );
}

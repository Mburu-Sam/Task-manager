import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Home</NavLink>
      <NavLink to="/tasks" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Tasks</NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? "nav-btn active" : "nav-btn"}>Settings</NavLink>
    </div>
  );
}

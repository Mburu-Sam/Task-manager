import { useState } from "react";
import { useTasks } from "../context/TaskContext.jsx";

export default function Settings() {
  const { darkMode, setDarkMode, resetTasks } = useTasks();
  const [username, setUsername] = useState(localStorage.getItem("tm_user") || "");

  function saveProfile() {
    localStorage.setItem("tm_user", username);
    alert("Profile saved");
  }

  return (
    <div className="page">
      <h2>Settings</h2>

      <div className="card small">
        <h4>Profile</h4>
        <input className="input" placeholder="Your name" value={username} onChange={e => setUsername(e.target.value)} />
        <button className="btn" onClick={saveProfile}>Save</button>
      </div>

      <div className="card small">
        <h4>Theme</h4>
        <div className="theme-toggle" onClick={() => setDarkMode(!darkMode)} role="button" tabIndex={0}>
          <div className="circle" />
        </div>
      </div>

      <div className="card small">
        <h4>Danger zone</h4>
        <button className="btn danger" onClick={() => { resetTasks(); alert("All tasks removed"); }}>Reset all tasks</button>
      </div>
    </div>
  );
}

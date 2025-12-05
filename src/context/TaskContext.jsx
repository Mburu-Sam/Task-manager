import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("tasks") || "[]");
    } catch {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("tm_darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("tm_darkMode", darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function addTask(title, category = "General", priority = "Medium") {
    const newTask = {
      id: Date.now(),
      title,
      category,
      priority,
      completed: false
    };
    setTasks(prev => [newTask, ...prev]);
  }

  function updateTask(id, updated) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, ...updated } : t)));
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  }

  function resetTasks() {
    setTasks([]);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
        resetTasks,
        darkMode,
        setDarkMode
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}

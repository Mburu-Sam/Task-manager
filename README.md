# Task Manager (React Router Version)

A simple task manager built with React, React Router, and Context API.
You can add tasks, edit tasks, delete tasks, filter by category, set priority, and mark tasks as completed or pending.
The app also includes a settings page where you switch themes and reset all tasks.

## Live Demo

[https://router-taskmanager.netlify.app/](https://router-taskmanager.netlify.app/)

## Features

* Add new tasks
* Edit existing tasks
* Delete tasks
* Mark tasks as completed or pending
* Filter tasks by category
* Task priority levels
* Light and dark theme
* Routing across pages using React Router
* Data saved in localStorage
* Clean layout with normal CSS

## Pages

### Home

Short introduction and navigation links.

### Tasks

Main task dashboard.
Includes:

* Add task form
* Task list
* Edit modal
* Category filters
* Priority display
* Completion status

### Settings

* Switch between light and dark theme
* Reset all tasks
* View total task count

## Project Structure

```
src/
  components/
    BottomMOdal.jsx
    Sidebar.jsx
    TaskItem.jsx
    TaskForm.jsx
    EditModal.jsx
  pages/
    Home.jsx
    Dashboard.jsx
    Tasks.jsx
    Settings.jsx
  context/
    TaskContext.jsx
  styles/
    main.css
    styles.css
    sidebar.css
  App.jsx
  main.jsx
```

## Tech Stack

* React
* React Router
* Context API
* CSS
* localStorage for persistence

## How to Run Locally

### 1. Install dependencies

```
npm install
```

### 2. Start the development server

```
npm run dev
```

# Task Manager

A simple React task manager with multi page navigation and local storage support.

## Live URL

Place your deployed link here

```
https://your-taskmanager-url.netlify.app
```

## Screenshot

Create a folder named `screenshots` in the project root.
Add your image file inside it.

Example structure

```
project-root
  src
  public
  screenshots
    home.png
  README.md
```

Embed it like this

```
![Home](./screenshots/home.png)
```

## Features

* Add tasks
* Edit tasks
* Delete tasks
* Mark tasks as complete
* Dark mode
* Local storage persistence
* Navigation built with React Router

## Project Structure

```
src
  components
    Sidebar.jsx
    TaskForm.jsx
    TaskItem.jsx
  context
    TaskContext.jsx
  pages
    Home.jsx
    Tasks.jsx
    Settings.jsx
  styles
    main.css
  App.jsx
  main.jsx
```

## Installation

Install dependencies

```
npm install
```

Start the project

```
npm run dev
```

Build for production

```
npm run build
```

## Deployment on Netlify

1. Run

```
npm run build
```

2. Upload the `dist` folder to Netlify
   or run

```
npm install -g netlify-cli
netlify login
netlify deploy
```

Choose

```
dist
```

## How to Add Screenshots

1. Take a screenshot in Ubuntu by pressing PrtSc
2. Save the image inside `screenshots` folder
3. Reference it in the README using

```
![Task Manager](./screenshots/yourimage.png)
```

---

If you want, I can customize this README using your real project name, your Netlify link, and the screenshot file name.

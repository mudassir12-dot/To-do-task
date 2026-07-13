# Daily Checklist — Vanilla JS To-Do App

A lightweight, fully client-side to-do list built with plain HTML, CSS, and JavaScript (no frameworks, no dependencies). Built as a hands-on project to practice core JavaScript concepts: DOM manipulation, event handling, array methods, and browser storage.

## ✨ Features

- **Add tasks** — quickly add new tasks via input + button
- **Complete/uncomplete** — toggle task status with a custom-styled checkbox
- **Delete tasks** — remove individual tasks instantly
- **Live task counter** — tracks number of completed tasks in real time
- **Clear completed** — bulk-remove completed tasks while keeping pending ones
- **Persistent storage** — tasks are saved to `localStorage`, so they survive page refreshes and browser restarts
- **Responsive, modern UI** — dark glassmorphism design with smooth animations

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, backdrop-filter, CSS custom properties)
- Vanilla JavaScript (ES6+)

## 📚 Concepts Practiced

- DOM traversal and dynamic element creation (`createElement`, `appendChild`)
- Event listeners on dynamically generated elements
- Array methods: `.filter()`, `.forEach()`
- ES6 features: arrow functions, template literals, default parameters
- Data persistence with `localStorage` + `JSON.stringify()` / `JSON.parse()`
- State management between an in-memory array and the rendered DOM
- Debugging real-world issues: re-render logic, event execution order, state synchronization

## 🚀 Getting Started

No build tools or installation required.

1. Clone the repository
   ```bash
   git clone <repo-url>
   ```
2. Open `index.html` in your browser

That's it — the app runs entirely in the browser.

## 📂 Project Structure

```
├── index.html      # Markup, styles, and app logic
└── README.md
```

## 🔮 Possible Future Improvements

- Task categories / tags
- Due dates and reminders
- Drag-and-drop task reordering
- Edit existing tasks inline

## 📝 Note

This project was built as part of a self-directed JavaScript learning path, with all logic written independently as a practice exercise in core JS fundamentals before moving on to advanced topics (closures, async/await, OOP) and Node.js.

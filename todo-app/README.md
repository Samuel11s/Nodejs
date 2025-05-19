# 📝 To-Do App with Node.js + Express + EJS + localStorage

A simple multi-task to-do app using:

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- localStorage (client-side data storage)
- Sbit.css (style similar to W3CSS)

---

## 📦 Installation

```bash
git clone https://github.com/samuel11s/Nodejs.git
cd todo-app
npm install
npm start
```

> After `npm start`, visit: **http://localhost:3000**

---

## 🧠 How it works

- Tasks are stored in the browser using `localStorage`.
- No database is used, no login is required.
- Built-in CSS is handled via `sbit.css` (W3CSS-compatible).

---

## 💡 Features

- Add & remove tasks
- Stored locally in the browser
- Minimal styling (responsive)

---

## 🔧 Tech Stack

- Node.js
- Express.js
- EJS
- localStorage
- Nodemon (for live reload)

---

## 🔄 Development

To run with live-reload:

```bash
npm start
```

It uses `nodemon` to automatically restart the server when files are changed.

---

## 📂 Folder Structure

```
todo-app/
├── public/
│   ├── script.js
│   └── sbit.css
├── views/
│   ├── index.ejs
│   └── form.ejs
├── server.js
├── package.json
└── README.md
```

---

## 📚 Purpose

This project was created **for educational purposes** to practice Node.js and npm basics.

---

## 📄 License

MIT License

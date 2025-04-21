# Learning Node.js

This repository contains everything I'm learning about **Node.js**.  
It includes demonstration files and initial tests for each concept studied, as well as a `server/server.js` file that consolidates everything I've learned into a single file.  

## Repository Structure

- **Demo and test files** → Each explored concept has its own demonstration file.  
- **server/server.js** → A single file that gathers all learned concepts.  


## Prerequisites

Before running the files, make sure you have installed:  

- [Node.js](https://nodejs.org/) (version 14.x or later)  
- npm (included with Node.js)  

Check your installation with:  

```bash
node -v
npm -v
```

## Installation

Clone the repository and navigate to the folder:  

```bash
git clone https://github.com/Samuel11s/Nodejs.git
cd Nodejs
```

## Running the Files

- `server/demo_file_server.js`: This file demonstrates how to create a basic HTTP server that serves files.  
Run with:
`node server/demo_file_server.js`

- `server/first_server.js`: This is the first basic server setup using Node.js' built-in http module. It listens on a port and responds with "Hello, World!" to requests.  
Run with:
`node server/first_server.js`

- `server/module_server.js`: This file explores how to create and use custom modules in Node.js. It demonstrates how to export and import functions from different files.  
Run with:
`node server/module_server.js`

- `server/server.js`: This file combines everything learned into a single project. It serves as a summary of all previous concepts in one place.  
Run with:
`node server/server.js`

## Learning Notes
Each demo file contains comments explaining what I’ve learned.  
Concepts are tested separately before being added to server/server.js.

## Important Notes
### About first_server.js  
This file is a minimal demo of my very first HTTP server using Node.js.
Its only purpose is to return the text "Hello, World!" to any HTTP request.
It does not serve HTML files or static assets.
So if you try to access a path like `http://localhost:8080/public/demo.html`, you'll get Nothing.  
Run it with:
`node server/first_server.js`

---

### About server.js  
This file is a more advanced version of the server.
It includes support for static file serving (like HTML, CSS, JS), basic routing, and dynamic modules.
It also integrates the `public/demo.html` interface properly.  
Run it with:
`node server/server.js`  
Then open in your browser:
`http://localhost:8000`

---

### About public/demo.html  
This is a simple front-end demo interface used to interact with the Node.js modules.  
The page shows cards with green `"Running"` indicators for modules like `HTTP` and `FS`.
These modules are executed at server start, so their results are already visible on the page.
Their "Display Output" buttons are intentionally disabled.  
Other modules have active buttons so you can trigger and view their outputs manually.

Each module card has a short description and prints a message to clarify its function.

## Tip for navigation  
Opening `public/demo.html` directly from your file system (e.g., by double-clicking) will load the page,
but interactive features like "Display Output" won’t work properly because there is no server context.  
For a full experience, always use: `http://localhost:8000` after running `node server/server.js`
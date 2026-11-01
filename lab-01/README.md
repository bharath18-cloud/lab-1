# Lab 01 – Node.js and Express Server

**Lab Number:** 01
**Lab Title:** Node.js and Express Server

---

## Student Information
- **Name:** Reddy Mahitha
- **Registration Number:** 252U1R3079
- **Section:** CSE-DS-2B

---

## Project Objective
Implement a simple HTTP server using Node.js built‑in `http` module and an Express server with multiple routes, demonstrating basic server setup, routing, and error handling.

---

## Technologies Used
- Node.js (v20.x) – JavaScript runtime
- Express (v5.x) – Web framework

---

## Installation
```bash
# Clone the repository (or navigate to the existing folder)
cd path/to/your/course-repo
# Create the lab folder if not present
mkdir -p lab-01 && cd lab-01

# Initialise npm (already done)
npm install      # installs Express (creates package‑lock.json)
```

---

## Running the Servers
### 1️⃣ Basic HTTP server (Node built‑in)
```bash
node basic-server.js
```
- Opens on **http://localhost:3000** and returns the plain text `Hello`.

### 2️⃣ Express server (Lab assignment)
```bash
npm start      # runs "node server.js"
```
- Opens on **http://localhost:3000**.

---

## Endpoint Documentation
| Method | URL | Description | Response | Status |
|--------|-----|-------------|----------|--------|
| GET | `/` | Welcome message | `Welcome to Node.js and Express Server!` | 200 |
| GET | `/about` | Student info as JSON | `{ "name": "Reddy Mahitha", "section": "CSE-DS-2B" }` | 200 |
| GET | `/time` | Current server date‑time | `{ "datetime": "2026‑11‑01T...Z" }` | 200 |
| ANY | `*` (unknown) | 404 page not found | `404 - Page Not Found` | 404 |

---

## Screenshots
| Endpoint | Screenshot |
|----------|------------|
| `/` | ![Home](./screenshots/home.png) |
| `/about` | ![About](./screenshots/about.png) |
| `/time` | ![Time](./screenshots/time.png) |
| 404 | ![Not‑Found](./screenshots/not-found.png) |

*(If you do not have screenshots yet, open each URL in a browser, press **Print Screen** or use the OS screenshot tool, save the image in the `screenshots/` folder with the names shown above.)*

---

## Problems Faced & Solutions
- **Port conflict** – Ensured the server uses `process.env.PORT || 3000` so hosting platforms can assign a free port.
- **PowerShell `curl` alias** – Used `node -e` with `fetch` for quick endpoint testing.
- **Missing `.gitignore`** – Added to avoid committing `node_modules/` and `.env`.

---

## Conclusion
The lab demonstrates how to set up a vanilla Node.js server, transition to an Express‑based application, define routes, handle JSON responses, and implement a generic 404 handler. It also showcases best practices such as environment‑based port configuration and a minimal `package.json`.

---

## Viva Questions & Answers
1. **Why use `process.env.PORT || 3000`?**
   - Allows the app to run on cloud platforms (Render, Heroku, etc.) where the port is provided via an environment variable. Locally it falls back to `3000`.
2. **What is the purpose of a 404 middleware?**
   - Catches any request that didn’t match defined routes, ensuring the client receives a proper `404` response instead of a silent hang.
3. **How does Express differ from the built‑in `http` module?**
   - Express adds routing, middleware, and convenient request/response helpers, reducing boilerplate code.
4. **Can we serve static files with this setup?**
   - Yes, by using `app.use(express.static('public'))` to expose a folder.
5. **How would you add environment variables?**
   - Store them in a `.env` file and load with the `dotenv` package, but this lab does not require any.

---

## Deployment (Render) – Quick Guide
1. Create a free Render account and a new **Web Service**.
2. Connect your GitHub repository containing the `lab-01` folder.
3. Set **Build Command** to `npm install`.
4. Set **Start Command** to `npm start` (Render will provide `PORT` automatically).
5. Deploy – Render will run `npm install`, then `npm start` and expose the app at `https://<your‑service>.onrender.com`.

> **Note:** Ensure `node_modules/` and `.env` are listed in `.gitignore` before pushing.

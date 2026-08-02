# Practical 4: RESTful API with Node.js & Express — TODO

## Setup
- [x] `mkdir task-manager-api && cd task-manager-api`
- [x] `npm init -y`
- [x] `npm install express`
- [x] Create `server.js`

## Basic Server
- [x] Import express, create `app`
- [x] Add `app.use(express.json())`
- [x] Add `app.listen(5000, ...)`
- [x] Run `node server.js` and confirm it starts

## Middleware
- [x] Add global logging middleware (method, URL, timestamp)
- [x] Add middleware to reject POST/PUT without `Content-Type: application/json`
- [x] Add route-specific `validateTaskId` middleware for PUT/DELETE

## In-Memory Data
- [x] Create `tasks` array + `nextId` counter

## CRUD Routes
- [x] `GET /tasks` → return all tasks (200)
- [x] `POST /tasks` → create task (201, validate title)
- [x] `PUT /tasks/:id` → update task (200, 404 if not found)
- [x] `DELETE /tasks/:id` → delete task (200, 404 if not found)

## Error Handling
- [x] Add 404 handler for undefined routes (after all routes)
- [x] Add global error-handling middleware (must be LAST)
- [x] Test with a deliberately thrown error (e.g. `/crash` route)

## Testing (Postman / Thunder Client)
- [x] GET /tasks → 200
- [x] POST /tasks with body → 201
- [x] POST /tasks without Content-Type header → 400
- [x] PUT /tasks/1 → 200
- [x] PUT /tasks/abc → 400 (invalid ID)
- [x] DELETE /tasks/1 → 200
- [x] DELETE /tasks/999 → 404
- [x] GET /randomroute → 404

## Documentation / Reflection
- [x] Answer: Why must error handler be last?
- [x] Answer: app.use() vs route-specific middleware?
- [x] Answer: Why not send raw stack traces to client?
- [x] Note down any errors you hit + how you fixed them

## GitHub Submission
- [x] `git init`
- [x] Add `.gitignore` with `node_modules/`
- [x] `git add .`
- [x] `git commit -m "Implement REST API with CRUD, logging middleware, and error handling"`
- [x] Create repo `task-manager-api-<rollno>` on GitHub
- [x] Push code
- [x] Verify repo has a clean structure + meaningful commit message

# Practical 2 To-Do — State Management & Routing in React
**Course:** ITUE301 – Advanced Web Development Frameworks

## Setup
- [ ] Confirm Practical 1 portfolio app is working (reusable components in place)
- [ ] Install React Router: `npm install react-router-dom`
- [ ] Wrap `<App />` with `<BrowserRouter>` in `main.jsx`

## Core Implementation
- [ ] Create `NavBar.jsx` using `<Link>` (not `<a>`) for navigation
- [ ] Add `Route: "/"` → `Home.jsx`
- [ ] Add `Route: "/projects"` → `Projects.jsx`
- [ ] Add `Route: "/contact"` → `Contact.jsx`
- [ ] Wrap routes in `<Routes>...</Routes>` inside `App.jsx`
- [ ] In `Contact.jsx`, create controlled input with `useState`:
  - [ ] `const [message, setMessage] = useState('')`
  - [ ] `<input value={message} onChange={(e) => setMessage(e.target.value)} />`
- [ ] Add a second `useState` variable to toggle visibility of an element (e.g. a help tooltip)
- [ ] Test all 3 routes — confirm no full page reload occurs

## Supplementary Problems
- [ ] Add a 404 Not Found route with a custom error component
- [ ] Implement dark/light mode toggle using `useState` (applies CSS class to root element)
- [ ] Store contact form input in state and show a live character count below the input

## Testing & Verification
- [ ] Verify `BrowserRouter` wraps `<App />` only once (in `main.jsx`)
- [ ] Verify no `<a href="...">` tags used for internal nav (should all be `<Link>`)
- [ ] Verify each `Route` has a unique `path`
- [ ] Verify form input updates live on typing

## Post-Lab / Assignment
- [ ] Review Theory Concepts section + Coursera Week 2 IBM module (props, event handling, component composition, useState)
- [ ] Commit routing implementation separately (clear commit message)
- [ ] Update README with notes on new routes added

## GitHub Deliverables Checklist
- [ ] Same repo as Practical 1, updated with new commits
- [ ] Working multi-route app (NavBar, Home, Projects, Contact)
- [ ] At least one commit specifically for routing
- [ ] README updated

## Before Viva
- [ ] Be ready to explain *why*, not just *what* (conceptual understanding — 2 marks)
- [ ] Code runs correctly and is original (4 marks)
- [ ] Output matches expected result (2 marks)
- [ ] Document any errors faced and how they were fixed (1 mark)
- [ ] Lab file complete and well-presented (1 mark)

---
**Total: 10 marks | Passing: 5/10 (50%)**

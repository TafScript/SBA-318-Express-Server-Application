import express from "express";
const router = express.Router();

let users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "user" }
];

// get users
router.get("/", (req, res) => {
    if (req.query.role) {
        res.json(users.filter( (user) => { return user.role === req.query.role; }));
    } else {
        res.json(users);
    }
});

export default router;
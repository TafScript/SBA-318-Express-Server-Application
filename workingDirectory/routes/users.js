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

// post user
router.post("/", (req, res) => {
    const name = req.body.name;
    const role = req.body.role;

    const newUser = { 
        id: users.length + 1, 
        name: req.body.name, 
        role: req.body.role        
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

//update user
router.patch("/:id", (req, res) =>{
    const id = parseInt(req.params.id);
    let user = users.find( (user) => {return user.id === id; });
    if (!user) return res.status(404).json({message: "User not found"});

    if (req.body.name) {
        user.name = req.body.name;
    }

    if (req.body.role) {
        user.role = req.body.role;
    }

    res.json(user);
})

export default router;
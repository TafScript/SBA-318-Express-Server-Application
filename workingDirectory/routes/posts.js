import express from "express";
const router = express.Router();

let posts = [
    {id: 1, title: "Zcash/Privacy Update, quantum resistent"},
    {id: 2, title: "Monero Privacy"}
];

//get posts
router.get("/", (req, res) =>{
    res.json(posts);
})

// post
router.post("/", (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
})

// patch
router.patch("/:id", (req,res) => {
    const id = parseInt(req.params.id);
    let post = posts.find((post) => { return p.id ===id; })
    if (!post) return res.status(404).json({message: "Post not found"});
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    res.json(post);
});

//delete
router.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  posts = posts.filter(function (p) { return p.id !== id; });
  res.json({ message: "Post deleted" });
});

export default router;
import express from "express";
const router = express.Router();

let comments = [
  { id: 1, postId: 1, text: "Nice update!" },
  { id: 2, postId: 2, text: "Love Zcash!" }
];

// GET comments (optional filter by postId)
router.get("/", (req, res) => {
  if (req.query.postId) {
    res.json(comments.filter(function (c) { return c.postId == req.query.postId; }));
  } else {
    res.json(comments);
  }
});

// POST comment
router.post("/", (req, res) => {
  const newComment = {
    id: comments.length + 1,
    postId: parseInt(req.body.postId),
    text: req.body.text
  };
  comments.push(newComment);
  res.status(201).json(newComment);
});

// DELETE comment
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  comments = comments.filter(function (comment) { return comment.id !== id; });
  res.json({ message: "Comment deleted" });
});

export default router;

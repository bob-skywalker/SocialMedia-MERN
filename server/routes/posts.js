import express from "express";
import { createComment, deleteComment, getFeedPosts, getUserPosts, likeComment, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts)
router.get('/:userId/posts', verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);
router.patch("/:postId/:commentId/like", verifyToken, likeComment);
router.patch("/:postId/createComment", verifyToken, createComment);
router.patch("/:postId/:commentId/deleteComment", verifyToken, deleteComment);

/* DELETE */ 
// Awaits Completion

export default router;

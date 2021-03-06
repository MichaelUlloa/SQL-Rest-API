import { Router } from 'express';
const router = Router();

import { GetPosts, CreatePost, GetPostById, DeletePostById, UpdatePost } from '../controllers/post.controller';

router.route('/')
    .get(GetPosts)
    .post(CreatePost);

router.route('/:postId')
    .get(GetPostById)
    .delete(DeletePostById)
    .put(UpdatePost);

export default router;
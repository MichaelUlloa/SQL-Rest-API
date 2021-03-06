"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const post_controller_1 = require("../controllers/post.controller");
router.route('/')
    .get(post_controller_1.GetPosts)
    .post(post_controller_1.CreatePost);
router.route('/:postId')
    .get(post_controller_1.GetPostById)
    .delete(post_controller_1.DeletePostById)
    .put(post_controller_1.UpdatePost);
exports.default = router;

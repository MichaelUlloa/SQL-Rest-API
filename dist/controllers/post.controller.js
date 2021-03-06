"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePost = exports.DeletePostById = exports.GetPostById = exports.CreatePost = exports.GetPosts = void 0;
const database_1 = require("../database");
function GetPosts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT * FROM posts');
        return res.json(posts[0]);
    });
}
exports.GetPosts = GetPosts;
;
function CreatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPost = req.body;
        const conn = yield database_1.connect();
        yield conn.query('INSERT INTO posts SET ?', [newPost]);
        return res.json({
            message: 'Post Created'
        });
    });
}
exports.CreatePost = CreatePost;
;
function GetPostById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        const posts = yield conn.query('SELECT * FROM posts WHERE id = ?', [id]);
        return res.json(posts[0]);
    });
}
exports.GetPostById = GetPostById;
;
function DeletePostById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const conn = yield database_1.connect();
        yield conn.query('DELETE FROM posts WHERE id = ?', [id]);
        return res.json({
            message: 'Post succesfully deleted'
        }).status(200);
    });
}
exports.DeletePostById = DeletePostById;
;
function UpdatePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.postId;
        const updatedPost = req.body;
        const conn = yield database_1.connect();
        yield conn.query('UPDATE posts SET ? WHERE id = ?', [updatedPost, id]);
        return res.json({
            message: 'Post updated'
        }).status(200);
    });
}
exports.UpdatePost = UpdatePost;

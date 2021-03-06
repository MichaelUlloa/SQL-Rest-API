import { Request, Response } from 'express';

import { connect } from '../database';
import { Post } from '../interfaces/post.interface';

export async function GetPosts(req : Request, res : Response): Promise<Response>{
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts')
    return res.json(posts[0]);
};

export async function CreatePost(req : Request, res : Response){
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.json({
        message: 'Post Created'
    });
};

export async function GetPostById(req : Request, res : Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    
    return res.json(posts[0]);
};

export async function DeletePostById(req: Request, res: Response): Promise<Response>{
    const id = req.params.postId;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    
    return res.json({
        message: 'Post succesfully deleted'
    }).status(200);
};

export async function UpdatePost(req: Request, res: Response) {
    const id = req.params.postId;
    const updatedPost = req.body;

    const conn = await connect();

    await conn.query('UPDATE posts SET ? WHERE id = ?', [updatedPost, id]);

    return res.json({
        message: 'Post updated'
    }).status(200);
}
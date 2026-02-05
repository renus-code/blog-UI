import type { Post } from "../data/posts";

export default function PostDetail({ post }: { post: Post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <img src={post.imageUrl} width={300} />
            <p>{post.content}</p>
        </div>
    );
}

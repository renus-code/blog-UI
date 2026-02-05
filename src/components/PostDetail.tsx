import type { Post } from "../data/posts";

export default function PostDetail({ post }: { post: Post }) {
    return (
        <article className="post-detail">
            <h2>{post.title}</h2>
            <div className="post-meta" style={{ marginBottom: '1rem' }}>
                <span>{new Date(post.date).toLocaleDateString()}</span> • <span className="badge">{post.category}</span>
            </div>

            <div className="post-image-container" style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    onError={(e) => e.currentTarget.style.display = 'none'}
                />
            </div>

            <div className="post-content" style={{ whiteSpace: 'pre-line' }}>
                {post.content}
            </div>
        </article>
    );
}

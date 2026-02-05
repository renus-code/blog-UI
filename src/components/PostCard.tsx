import type { Post } from "../data/posts";

type Props = {
    post: Post;
    onClick: (post: Post) => void;
};

export default function PostCard({ post, onClick }: Props) {
    return (
        <div className="post-card" onClick={() => onClick(post)}>
            <div className="post-card-image" style={{ backgroundColor: '#e3e4e6' }}>
                {/* Fallback if image fails or while loading */}
                {post.imageUrl && <img src={post.imageUrl} alt={post.title} onError={(e) => e.currentTarget.style.display = 'none'} />}
            </div>
            <div className="post-card-content">
                <h3>{post.title}</h3>
                <div className="post-meta">
                    <span>{new Date(post.date).toLocaleDateString()}</span> • <span>3 min read</span>
                </div>
                <div className="post-tags">
                    <span className="badge">{post.category}</span>
                </div>
                <p>{post.excerpt}</p>
                <button className="btn btn-sm">Read</button>
            </div>
        </div>
    );
}

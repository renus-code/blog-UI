import type { Post } from "../data/posts";
import PostCard from "./PostCard";

type Props = {
    posts: Post[];
    onSelect: (post: Post) => void;
};

export default function PostList({ posts, onSelect }: Props) {
    return (
        <div className="post-list">
            <h2>Recent Posts</h2>
            <div className="post-stack">
                {posts.length === 0 ? (
                    <p style={{ color: "var(--text-muted)" }}>No posts found.</p>
                ) : (
                    posts.map((p) => (
                        <PostCard key={p.id} post={p} onClick={onSelect} />
                    ))
                )}
            </div>
        </div>
    );
}

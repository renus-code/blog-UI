import type { Post } from "../data/posts";

type Props = {
    posts: Post[];
    onSelect: (post: Post) => void;
};

export default function PostList({ posts, onSelect }: Props) {
    return (
        <div>
            {posts.map((p) => (
                <button key={p.id} onClick={() => onSelect(p)}>
                    {p.title}
                </button>
            ))}
        </div>
    );
}

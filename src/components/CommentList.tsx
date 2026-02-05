import type { Comment } from "../data/posts";
import CommentItem from "./CommentItem";

type Props = {
    comments: Comment[];
};

export default function CommentList({ comments }: Props) {
    return (
        <div className="comment-list">
            <h3>Comments ({comments.length})</h3>
            {comments.length === 0 ? (
                <p className="no-comments">No comments yet. Be the first!</p>
            ) : (
                comments.map((c) => <CommentItem key={c.id} comment={c} />)
            )}
        </div>
    );
}

import type { Comment } from "../data/posts";

type Props = {
    comment: Comment;
};

export default function CommentItem({ comment }: Props) {
    return (
        <div className="comment-item">
            <div className="comment-header">
                <strong>{comment.author}</strong>
                <span className="comment-date"> • {comment.timestamp}</span>
            </div>
            <p className="comment-text">{comment.text}</p>
        </div>
    );
}

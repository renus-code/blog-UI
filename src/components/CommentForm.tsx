import { useState } from "react";

type Props = {
    postId: number;
    onSubmit: (author: string, text: string) => void;
};

export default function CommentForm({ onSubmit }: Props) {
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");
    const [errors, setErrors] = useState<{ author?: string; text?: string }>({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { author?: string; text?: string } = {};

        if (author.length < 2) {
            newErrors.author = "Name must be at least 2 characters.";
        }
        if (text.length < 10) {
            newErrors.text = "Comment must be at least 10 characters.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onSubmit(author, text);
        setAuthor("");
        setText("");
        setErrors({});
    };

    return (
        <form className="comment-form card" onSubmit={handleSubmit}>
            <h3>Leave a Comment</h3>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className={errors.author ? "error" : ""}
                />
                {errors.author && <span className="error-msg">{errors.author}</span>}
            </div>
            <div className="form-group">
                <textarea
                    placeholder="Your Comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={errors.text ? "error" : ""}
                    rows={3}
                />
                {errors.text && <span className="error-msg">{errors.text}</span>}
            </div>
            <button type="submit" className="btn btn-primary">Submit Comment</button>
        </form>
    );
}

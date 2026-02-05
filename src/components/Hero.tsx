
type Props = {
    searchTerm: string;
    onSearch: (value: string) => void;
};

export default function Hero({ searchTerm, onSearch }: Props) {
    return (
        <div className="hero">
            <div className="container hero-content">
                <h2>Welcome to MyBlog</h2>
                <p>A WordPress-style static blog UI: recent posts, categories, and comments.</p>
                <div className="hero-search">
                    <input
                        type="text"
                        placeholder="Search posts..."
                        value={searchTerm}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

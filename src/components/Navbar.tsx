
type Props = {
    onHomeClick: () => void;
};

export default function Navbar({ onHomeClick }: Props) {
    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <h1 className="logo">MyBlog</h1>
                <ul className="nav-links">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onHomeClick(); }}>Home</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Posts</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Categories</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
                    <li><a href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

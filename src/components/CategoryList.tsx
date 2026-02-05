
export default function CategoryList() {
    const categories = ["React", "TypeScript", "Forms", "State Management", "Design", "CSS"];
    return (
        <div className="category-list card">
            <h3>Sidebar</h3>
            <ul className="category-ul">
                {categories.map(cat => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
        </div>
    );
}

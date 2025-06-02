export default function Navbar({ onCategorySelect }) {
  const categories = [ "Success", "Happiness","Confidence","Dreams"];

  return (
    <nav className="navbar" style={{ display: "flex", gap: "1rem" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className="nav-btn"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
  );
}

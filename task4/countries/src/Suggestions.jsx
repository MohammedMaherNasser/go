const Suggestions = ({ onSelect }) => {
  const list = ["Saudi Arabia", "Finland", "Japan", "Brazil", "Egypt"];

  return (
    <div className="suggestions">
      <strong>دول مقترحة:</strong>
      <div style={{ display: "flex", gap: "10px", marginTop: "5px" }}>
        {list.map((country) => (
          <button
            key={country}
            onClick={() => onSelect(country)}
          >
            {country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;

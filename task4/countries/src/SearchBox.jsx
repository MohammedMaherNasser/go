const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="ابحث عن دولة..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;

const CountryDetails = ({ country }) => (
  <div className="country-card">
    <h2>{country.name.common}</h2>
    <p>العاصمة: {country.capital?.[0]}</p>
    <p>المساحة: {country.area} كم²</p>
    <p>السكان: {country.population?.toLocaleString()}</p>

    <h3>اللغات</h3>
    <ul>
      {Object.values(country.languages || {}).map((lang) => (
        <li key={lang}>{lang}</li>
      ))}
    </ul>

    <img
      src={country.flags.png}
      alt={`علم ${country.name.common}`}
      width="200"
    />
  </div>
);

export default CountryDetails;

import { useState, useEffect } from "react";
import axios from "axios";

import SearchBox from "./SearchBox.jsx";
import CountryList from "./CountryList.jsx";
import CountryDetails from "./CountryDetails.jsx";
import Suggestions from "./Suggestions.jsx";

import "./style.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((res) => setCountries(res.data));
  }, []);

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  let content;

  if (filter === "") {
    content = <p>ابحث عن دولة...</p>;
  } else if (filtered.length > 10) {
    content = <p>النتائج كثيرة جدًا، كن أكثر تحديدًا</p>;
  } else if (filtered.length > 1) {
    content = <CountryList countries={filtered} />;
  } else if (filtered.length === 1) {
    content = <CountryDetails country={filtered[0]} />;
  } else {
    content = <p>لا توجد نتائج</p>;
  }

  return (
    <div className="container">
      <h1>معلومات الدول</h1>

      <Suggestions onSelect={setFilter} />

      <SearchBox value={filter} onChange={setFilter} />

      {content}
    </div>
  );
};

export default App;

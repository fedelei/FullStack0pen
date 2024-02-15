import { useEffect, useState } from "react";
import axios from "axios";
import FilterCountries from "./components/FilterCountries";
import OneCountry from "./components/OneCountry";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const handleCountry = (e) => {
    setSearch(e.target.value);
    const filter = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFilterCountry(filter);
    setSelectedCountry(null);
  };

  const showCountry = (country) => {
    console.log(country);
    setSelectedCountry(country);
    setSearch("");
  };

  return (
    <div>
      <form>
        find countries <input value={search} onChange={handleCountry} />
      </form>
      <div>
        <OneCountry
          selectedCountry={selectedCountry}
          showCountry={showCountry}
        />

        {!selectedCountry && (
          <FilterCountries
            filterCountry={filterCountry}
            showCountry={showCountry}
          />
        )}
      </div>
    </div>
  );
};

export default App;

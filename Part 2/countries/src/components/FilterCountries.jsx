import Weather from "./Weather";

const FilterCountries = ({ filterCountry, showCountry }) => {
  if (filterCountry.length > 10)
    return <div>Too many matches, specify another filter</div>;

  if (filterCountry.length === 1) {
    const country = filterCountry[0];
    const { name, capital, area, languages, flags } = country;
    const language = Object.values(languages);
    return (
      <>
        <h1>{name.common}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <ul>
          <h2>languages</h2>
          {language.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
        <img src={flags.png} alt={name} />
        <Weather filterCountry={filterCountry} />
      </>
    );
  }

  return (
    <div>
      {filterCountry.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{" "}
          <button
            type="submit"
            value={country.name}
            onClick={() => showCountry(country)}
          >
            show
          </button>{" "}
        </div>
      ))}
    </div>
  );
};

export default FilterCountries;

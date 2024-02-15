import Weather from "./Weather";

const OneCountry = ({ selectedCountry }) => {
  console.log(selectedCountry);

  return (
    <div>
      {selectedCountry && (
        <div>
          <h1>{selectedCountry.name.common}</h1>
          <p>Capital: {selectedCountry.capital[0]}</p>
          <p>Area: {selectedCountry.area} sq km</p>
          <h3>Languages:</h3>
          <ul>
            {Object.values(selectedCountry.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <img
            src={selectedCountry.flags.png}
            alt={selectedCountry.name.common}
          />
          <Weather selectedCountry={selectedCountry} />
        </div>
      )}
    </div>
  );
};

export default OneCountry;

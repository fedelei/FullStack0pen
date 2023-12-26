const PersonDetails = ({ selectedPerson }) => {
  return (
    <div>
      <h2>Person Details</h2>
      {selectedPerson ? (
        <div>
          <p>Name: {selectedPerson.name}</p>
          <p>Number: {selectedPerson.number}</p>
        </div>
      ) : (
        <p>No person selected</p>
      )}
    </div>
  );
};

export default PersonDetails;
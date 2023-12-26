import PersonDetails from "./PersonDetails";


const Persons = ({ persons, selectedPerson, handlePersonClick }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name} onClick={()=> handlePersonClick(person)}>
          {person.name} {person.number}
        </div>
      ))}
      <PersonDetails selectedPerson={selectedPerson}/>
    </div>
  );
};

export default Persons;

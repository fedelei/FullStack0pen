import { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";


const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "0406087123" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
 

  const addPerson = (e) => {
    e.preventDefault();
    const isNameDuplicate = persons.some((person) => person.name === newName);
    if (isNameDuplicate) {
      alert(" The contact is already added to phonebook");
    } else {
      const newPersons = [
        {
          name: newName,
          number: number,
        },
      ];
      setPersons(persons.concat(newPersons));

      setNewName("");
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    e.preventDefault();
    setNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };
  
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Form
        addPerson={addPerson}
        newName={newName}
        handleChange={handleChange}
        number={number}
        handleChangeNumber={handleChangeNumber}
      />

      <Persons
        persons={filteredPersons}
        selectedPerson={selectedPerson}
        handlePersonClick={handlePersonClick}
       
      />
    </div>
  );
};

export default App;

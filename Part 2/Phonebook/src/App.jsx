import { useEffect, useState } from "react";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import phonebookServices from "./services/phonebookServices";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [numbers, setNumbers] = useState("");
  const [filtered, setFiltered] = useState("");
  const [confirmMessage, setConfirmMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
 

  useEffect(() => {
    phonebookServices.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const existPerson = persons.find(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );
    if (existPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook. Do you want replace it?`
      );

      if (confirmUpdate) {
        const updatedPerson = { ...existPerson, number: numbers };

        phonebookServices.update(existPerson.id, updatedPerson).then((res) => {
          setPersons(
            persons.map((person) =>
              person.id === existPerson.id ? res.data : person
            )
          );
          setNewName("");
          setNumbers("");
          setConfirmMessage('It has been successfully updated')
          setTimeout(()=> {
            setConfirmMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage('It has not been updated correctly')
          setTimeout(()=> {
            setErrorMessage(null)
          }, 5000)
        })
      }
    } else {
      const newPersons = { name: newName, number: numbers };
      phonebookServices.create(newPersons).then((res) => {
        setPersons([...persons, res.data]);
        setNewName("");
        setNumbers("");
        setConfirmMessage('The person was added successfully')
        setTimeout(() => {
          setConfirmMessage(null)
        }, 5000)
      }).catch((error) => {
        setErrorMessage(`${error}.Could not add`)
        setTimeout(()=> {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNumbers(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFiltered(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filtered.toLowerCase())
  );

  const handleDelete = (id) => {
    const deleted = persons.find((p) => p.id === id);
    if (window.confirm(`Do you want delete ${deleted.name}?`)) {
      phonebookServices.deleteId(id).then((res) => {
        setPersons(persons.filter((person) => person.id !== id));
        setConfirmMessage('Has been successfully removed')
        console.log(confirmMessage);
        setTimeout(()=> {
          setConfirmMessage(null)
        }, 5000)
      }).catch((error) => {
        setErrorMessage('UPS! Could not be deleted.')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
      
  }
}
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification confirm={confirmMessage} error={errorMessage} />
      <Filter filtered={filtered} handleFilterChange={handleFilterChange} />
      <Form
        newName={newName}
        onSubmit={onSubmit}
        handleChange={handleChange}
        numbers={numbers}
        handleChangeNumber={handleChangeNumber}
      />

      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
}

export default App;

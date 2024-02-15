

const Persons = ({filteredPersons, handleDelete}) => {
  return (
    <div>
        <h2>Numbers</h2>
        <ul>
        {filteredPersons.map(p => (
            <li key={p.name}>{p.name} {p.number} <button onClick={() => handleDelete(p.id)}>Delete</button></li>
        ))
        }
        </ul>
        
    </div>
  )
}

export default Persons
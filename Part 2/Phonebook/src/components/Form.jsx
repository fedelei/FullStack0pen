

const Form = ({addPerson, newName, handleChange, number, handleChangeNumber }) => {
  return (
    <div>
        <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number:{" "}
          <input type="text" value={number} onChange={handleChangeNumber} />
        </div>
        <div>
          <button type="submit">add </button>
        </div>
      </form>
    </div>
  )
}

export default Form
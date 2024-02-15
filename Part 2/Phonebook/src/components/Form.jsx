import React from 'react'

const Form = ({onSubmit, newName, handleChange, numbers, handleChangeNumber}) => {
  return (
    <div>
        <form onSubmit={onSubmit}>
        <div>
         <h2>Add a new</h2>
          name: <input value={newName} onChange={handleChange} required/>
          
        </div>
        <div>
         number: <input value={numbers} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
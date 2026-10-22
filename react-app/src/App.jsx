import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [person, setPerson] = useState([
    { id:1, name:'Jackson', number: '010 5628 5628 67' },
    { id:2, name:'Felix', number: '0901244678' }
  ])

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !number){
      alert('Please fill in all form')
      return
    }

    if(editingId){
      setPerson(person.map(p => p.id === editingId ? { ...p, name, number } : p))
      setEditingId(null)
    } else {
      setPerson([...person, { id: person.length + 1, name, number }]);
    }

    setName('')
    setNumber('')
  }

  const personsToShow = person.filter((p) => 
    p.name.toLowerCase().includes(search.toLowerCase())
  )

  const handleDelete = (id) =>{
    const updatePersons = person.filter((p) => p.id !==id);
    setPerson(updatePersons);
  }

  const handleEdit = (p) => {
    setName(p.name)
    setNumber(p.number)
    setEditingId(p.id)
  }

  return (
    <div className="container">
      <h1>PhoneBook App</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name"/>
        
        <label htmlFor="number">Number:</label>
        <input type="text" name="number" value={number} id="number" onChange={(e) => setNumber(e.target.value)} />

        <button type="submit" className="submit-btn">{editingId ? 'Update' : 'Submit'}</button>
      </form>

      <div className="search-box">
        <h2>Search</h2>
        <input 
          type="text" 
          placeholder='Search name...' 
          value={search}
          onChange={(e) => setSearch(e.target.value)} 
          id="search" 
          name="search"
        />
      </div>

      <ul className="contact-list">
        {personsToShow.map((p) => (
          <li key={p.id}>
            <span className="info">{p.name}: {p.number}</span>
            <div className="btn-group">
              <button className="edit" onClick={() => handleEdit(p)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(p.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
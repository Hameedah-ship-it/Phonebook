import { useState } from 'react'
import './App.css'
import Form from './component/Form.jsx'
import Search from './component/Search.jsx'
import Person from './component/Person.jsx'
// import Note from './component/Note.jsx'

function App() {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [person, setPerson] = useState([
    { id:1, name:'Jackson', number: '010 5628 5628 67', date: new Date().toLocaleString() },
    { id:2, name:'Felix', number: '0901244678', date: new Date().toLocaleString() }
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
      setPerson([...person, { id: Date.now(), name, number, date: new Date().toLocaleString() }]);
    }
    setName('')
    setNumber('')
  }

  const personsToShow = person.filter((p) => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id) =>{
    if(window.confirm("Are you sure you want to delete this")){
      setPerson(person.filter((p) => p.id !==id));
    }
  }

  const handleEdit = (p) => {
    setName(p.name)
    setNumber(p.number)
    setEditingId(p.id)
  }

  return (
    <div className="container">
      <h1>PhoneBook App</h1>
      <Form 
        handleSubmit={handleSubmit}
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
        editingId={editingId}
      />
      <Search search={searchTerm} setSearch={setSearchTerm}/>
      <Person persons={personsToShow} onEdit={handleEdit} onDelete={handleDelete} />
      {/* <Note/> */}

    </div>
  )
}

export default App
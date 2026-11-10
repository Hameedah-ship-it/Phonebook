function Person({ persons, onEdit, onDelete }) {
  return (
    <ul className="contact-list">
      {persons.map((p) => (
        <li key={p.id}>
          <span className="info">
            {p.name}: {p.number} <br/>
            <small>{p.date}</small>
          </span>
          <div className="btn-group">
            <button className="edit" onClick={() => onEdit(p)}>Edit</button>
            <button className="delete" onClick={() => onDelete(p.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Person
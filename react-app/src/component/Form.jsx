function Form({ handleSubmit, setName, name, number, setNumber, editingId }){
    return(
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" />
        
        <label htmlFor="number">Number:</label>
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} id="number" />

        <button type="submit" className="submit-btn">{editingId ? 'Update' : 'Submit'}</button>
      </form>
    )
}

export default Form
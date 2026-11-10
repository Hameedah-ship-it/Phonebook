// import { useState } from "react"

// function Note(){
//   const [title, setTitle] = useState("")
//   const [message, setMessage] = useState("")
//   const [notes, setNotes] = useState([]) 

//   function handleSubmit(e){ 
//       e.preventDefault()

//       console.log("Title", title)
//       console.log("Message", message)

//       const newNote = { title, message, id: notes.length + 1 }
//       setNotes([...notes, newNote])

    
//       setTitle("")
//       setMessage("")
//   }

//   return(
//     <div className="">
//         <h1>Note App</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="">
//             <input type="text" name="title" placeholder="Title.." value={title} onChange={(e) => setTitle(e.target.value) }/>
//           </div>
//           <div className="">
//             <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10"></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </form>

//         <div className="note-list">
//             {notes.map((note, index) => (
//                 <div key={note.id} className="note">
//                     <h3>{note.title}</h3>
//                     <p>{note.message}</p>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Note
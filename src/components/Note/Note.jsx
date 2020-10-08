import React, { useState } from 'react';
import './Note.css'

function Note({handleDelete, id, description, notesList, setNotesList}) {
    function handleChange(e){
        const note = {
            id:id,
            description:e.target.value,
        }
        const tempList=notesList
        const filteredItems = tempList.filter(note => note.id !== id)
        filteredItems.push(note)
        localStorage.setItem('lsNotesList',JSON.stringify(filteredItems)) 
        setNotesList(JSON.parse(localStorage.getItem('lsNotesList')))
    }
    return (
        <div className='note'>
            <textarea className='text' value={description} onChange={handleChange}/>
            <button onClick={() => handleDelete(id)} className='btn-note'>delete</button>
        </div>
  )
}
export default Note;
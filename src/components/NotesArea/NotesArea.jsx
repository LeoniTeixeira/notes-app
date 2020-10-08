import React from 'react';
import Note from '../Note/Note';
import './NotesArea.css'

function NotesArea({handleDelete, notesList, setNotesList}) {
    return (
        <div className='list-style'>
                {notesList.map((note) => <Note key={note.id} {...note} 
                                            handleDelete={handleDelete}
                                            notesList={notesList}
                                            setNotesList={setNotesList}/>)}
        </div> 
    )
}
export default NotesArea;
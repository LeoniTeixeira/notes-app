import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header'
import NotesArea from './components/NotesArea/NotesArea';
import './App.css'

export default function App() {
  if(localStorage.getItem('lsNotesList')===null){
    const tempList=[]
    localStorage.setItem('lsNotesList',JSON.stringify(tempList))
  }
  const [notesList, setNotesList] = useState(JSON.parse(localStorage.getItem('lsNotesList')))
  function handleAdd(){
    const note = {
      id:uuidv4(),
      description:'',
    }
    const tempList=notesList
    tempList.push(note)
    localStorage.setItem('lsNotesList',JSON.stringify(tempList)) 
    setNotesList(JSON.parse(localStorage.getItem('lsNotesList')))
  }
  function handleDelete(id){
    const tempList=notesList
    const filteredItems = tempList.filter(note => note.id !== id)
    localStorage.setItem('lsNotesList',JSON.stringify(filteredItems))
    setNotesList(JSON.parse(localStorage.getItem('lsNotesList')))
  }
  return (
    <div className='App'>
      <Header handleAdd={handleAdd}/>
      <NotesArea notesList={notesList}
                 handleDelete={handleDelete}
                 setNotesList={setNotesList}/>
    </div>
  )
}
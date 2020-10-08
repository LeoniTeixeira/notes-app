import React from 'react';
import './Header.css'

function Header({handleAdd}) {
  return (
    <div className='header'>
       <h1>
          Notes App
      </h1>
      <button onClick={handleAdd} className='btn-header'>
        +
      </button>
    </div>
  )
}
export default Header;
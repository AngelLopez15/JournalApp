import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
  return (
    <div className="notes-main-content">
      
      <NoteAppBar />
      
      <div className="notes-main-content__content">

        <input 
          type="text"
          placeholder="Un titulo asombroso"
          className="notes-main-content__input-title"
        />

        <textarea
          placeholder="¿Que paso hoy?"
          className="notes-main-content__textarea"
        ></textarea>

        <div className="notes-main-content__image">
          <img 
            src="https://cdn.pixabay.com/photo/2013/10/28/23/32/sterling-castle-202103_960_720.jpg"
            alt="castle"
            className="imagen"
          />
        </div>
      
      </div>
    </div>
  )
}

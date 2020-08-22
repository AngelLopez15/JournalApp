import React from 'react'

export const NothingSelected = () => {
  return (
    <div className="journal__nothing-main-content">
      <p className="journal__noting-text">Seleccione una tarea</p>
      <p className="journal__noting-text">o cree una entrada</p>
      <i className="far fa-star star"></i>
    </div>
  )
}

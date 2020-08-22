import React from 'react'

export const JournalEntry = () => {
  
  // los style en linea en react deben ser objetos de javascrip pero con propiedades CSS

  return (
    <div className="journal__entry">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize:'cover',
          backgroundImage:'url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg)'
        }}
      >
      </div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo dia</p>
        <p className="journal__entry-content">Ducimus autem unde ea aperiam repellendus.</p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <p>28</p>
      </div>

    </div>
  )
}

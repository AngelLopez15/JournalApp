import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
  return (
    <aside className="journal__sidebar">

      <div className="journal__sidebar-navbar">
        <p className="journal__sidebar-title">
          <i className="far fa-moon"></i>
          <span className="journal__name">Angel Lopez</span>
        </p>
      
        <button className="btn">
          Salir
        </button>
      </div>

      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-5x journal__calendar-title"></i>
        <p className="journal__entry-title">
          Nueva entrada
        </p>
      </div>

      <JournalEntries />

    </aside>
  )
}

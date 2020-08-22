import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
  return (
      <main className="journal-main-content">
        <Sidebar />

        {/* <NothingSelected /> */}
        <NoteScreen />
      </main>
  )
}

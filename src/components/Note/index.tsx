import { PlusCircle } from "phosphor-react";
import { AddNote, NoteContainer, NoteContent } from "./styles";
import { useEffect, useState } from "react";



interface Notes {
  id: string
  content: string
}

export function Note() {

  const [notes, setNotes] = useState<Notes[]>(() => {
    const storedNotes = localStorage.getItem('@sticky-notes-1.0.0')
    return storedNotes ? JSON.parse(storedNotes) : []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(notes)
    localStorage.setItem('@sticky-notes-1.0.0', stateJSON)

  }, [notes])

  function createNewNote() {
    const newNote = {
      id: self.crypto.randomUUID(),
      content: ""
    }
    setNotes(state => [...state, newNote])

  }

  function updateNoteContent(id: string, newContent: string) {
    setNotes(state =>
      state.map(note =>
        note.id === id ? { ...note, content: newContent } : note
      )
    )
  }

  function removeNote(id: string) {
    const doDelete = confirm('Deseja apagar esta nota?')

    if (doDelete) {
      setNotes(state => state.filter((note) => note.id !== id))
    }
  }

  return (
    <NoteContainer>
      {
        notes.map((note) => (
          <NoteContent
            key={note.id}
            value={note.content}
            placeholder="Sua nota aqui. (para deletar dê um duplo clique)"
            onChange={(e) => updateNoteContent(note.id, e.target.value)}
            onDoubleClick={() => removeNote(note.id)}
          />
        ))
      }
      <AddNote onClick={createNewNote}>
        <PlusCircle size={128} />
      </AddNote>
    </NoteContainer>
  )
}
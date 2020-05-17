import React from 'react'
import Note from '../Note/Note'
import Context from '../Context'
import { findNote } from '../notes-helpers'
import PropTypes from 'prop-types'
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = Context

  deleteNote = id => {
    this.props.history.push(`/`)
  }
  
  render() {
    const { notes=[] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || { content: '' }
  
    return (
      <section className='NotePageMain'>
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.deleteNote}
        />
        <div className='NotePageMain__content'>
          {note.content}
        </div>
      </section>
    )
  }
}

NotePageMain.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object.isRequired
  })
}
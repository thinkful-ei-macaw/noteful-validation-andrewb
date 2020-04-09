import React from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import Context from '../Context'

class AddNote extends React.Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = Context

    addNote = e => {
        e.preventDefault();
        const newNote = {
            name: e.target['note-name'].value,
            content: e.target['content-name'].value,
            modified: new Date()
        }
        console.log(newNote)
        fetch('http://localhost:9090/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(note => {
            this.context.addNote(note);
            this.props.history.push(`/note/${note.id}`)
        })
    }

    render() {
        
        return(
           
            <NotefulForm onSubmit={this.addNote}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="note-name" required></input>
                <label htmlFor="content">Content</label>
                <textarea id="content" type="text" name="content-name" required/>
                <button type="submit">Add Note</button>

            </NotefulForm>
           
        )
    }
}

export default AddNote
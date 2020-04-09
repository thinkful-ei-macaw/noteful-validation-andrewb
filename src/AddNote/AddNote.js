import React from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import Context from '../Context'
import config from '../config'

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
        }
        console.log(newNote)
        fetch(`${config.API_ENDPOINT}/notes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newNote),
        })
    }

    state = {
        name: '',
        content: ''
    }

    render() {
        
        return(
           
            <NotefulForm onSubmit={this.addNote}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="note-name"></input>
                <label htmlFor="content">Content</label>
                <textarea id="content" type="text" name="content-name" />
                <button type="submit">Add Note</button>

            </NotefulForm>
           
        )
    }
}

export default AddNote
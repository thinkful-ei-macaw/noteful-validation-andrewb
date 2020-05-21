import React from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import Context from '../Context'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import config from '../config'

class AddNote extends React.Component {

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }


    static contextType = Context

    addNote = e => {
        e.preventDefault();
        const newNote = {
            name: e.target['note-name'].value,
            content: e.target['content-name'].value,
            folder_id: e.target.folderId.value,
            modified: new Date()
        }
        console.log(newNote)
        fetch(`${config.API_ENDPOINT}/notes`, {
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
            this.context.updateFolder(note);
            this.props.history.push(`/note/${note.id}`)
        })
    }

    render() {
        
        return(
           
            <NotefulForm onSubmit={this.addNote}>
            <ErrorBoundary>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="note-name" required></input>
                <label htmlFor="content">Content</label>
                <textarea id="content" type="text" name="content-name" required/>
                <label htmlFor="folder">Folder</label>
                <select name="folderId">
                    {this.context.folders.map(folder => (
                        <option key={folder.id} value={folder.id}>{folder.name}</option>
                    ))}
                </select>
                <button type="submit">Add Note</button>
            </ErrorBoundary>                
            </NotefulForm>
           
        )
    }
}

export default AddNote
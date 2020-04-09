import React from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddFolder.css'
import Context from '../Context'


class AddFolder extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    static contextType = Context;

    handleAddFolder = e => {
        e.preventDefault()
        let folder = {
            name: e.target['new-folder'].value
        }
        console.log(folder)
        fetch('http://localhost:9090/folders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(folder)
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(folder => {
            this.context.addFolder(folder);
            this.props.history.push(`/folder/${folder.id}`)

        })
    }

    render() {
        return (
                <NotefulForm onSubmit={this.handleAddFolder}>
                    <label htmlFor="new-folder">New Folder</label>
                    <input type="text" id="new-folder" name="new-folder" required/>
                    <button type='submit'>Add New Folder</button>
                    
                </NotefulForm>
        )
    }
}

export default AddFolder
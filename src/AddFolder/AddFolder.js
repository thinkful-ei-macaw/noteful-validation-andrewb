import React from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import Context from '../Context'
import PropTypes from 'prop-types'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import config from '../config'

class AddFolder extends React.Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }
    
    static propTypes = {
        history: PropTypes.object.isRequired
    }

    static contextType = Context;

    handleAddFolder = e => {
        e.preventDefault()
        let folder = {
            name: e.target['new-folder'].value
        }
        console.log(folder)
        fetch(`${config.API_ENDPOINT}/folders`, {
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
            this.props.history.push(`/`)

        })
    }

    render() {
        return (
                <NotefulForm onSubmit={this.handleAddFolder}>
                <ErrorBoundary>
                    <label htmlFor="new-folder">New Folder</label>
                    <input type="text" id="new-folder" name="new-folder" required/>
                    <button type='submit'>Add New Folder</button>
                </ErrorBoundary>    
                </NotefulForm>
        )
    }
}

export default AddFolder
import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import AddFolder from '../AddFolder/AddFolder'
import AddNote from '../AddNote/AddNote'
import Context from '../Context';
import './App.css';

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
        
        fetch('http://localhost:9090/folders')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    'folders': result
                })
            })

        fetch('http://localhost:9090/notes')
            .then(res => res.json())
            .then(result => {
                this.setState({
                    'notes': result
                })
            })
    }

    handleAddedFolder = (item) => {
        let folder = this.state.folders;
        folder.push(item)
        this.setState({
            folders: folder
        })
    }

    handleNewNote = (note) => {
        let newNote = this.state.notes;
        newNote.push(note)
        this.setState({
            notes: newNote
        })
    }

    setNotes = notes => {
        this.setState({ notes: notes });
    };

    deleteNote = (id) => {
        const newNotes = this.state.notes.filter(n => n.id !== id);
        this.setNotes(newNotes)
    }

    

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                ))}
                <Route path="/note/:noteId" component={NotePageNav} />
                <Route path="/add-folder" component={NotePageNav} />
                <Route path="/add-note" component={NotePageNav} />
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListMain}
                    />
                ))}
                <Route path="/note/:noteId" component={NotePageMain} />
                <Route path="/add-folder" component={AddFolder}/>
                <Route path="/add-note" component={AddNote}/>
            </>
        );
    }

    render() {
        const value = {
            notes: this.state.notes,
            folders: this.state.folders,
            addFolder: this.handleAddedFolder,
            addNote: this.handleNewNote,
            deleteNote: this.deleteNote
        };
        return (
            <Context.Provider value={value}>
                <div className="App">
                    <nav className="App__nav">{this.renderNavRoutes()}</nav>
                    <header className="App__header">
                        <h1>
                            <Link to="/">Noteful</Link>{' '}
                            <FontAwesomeIcon icon="check-double" />
                        </h1>
                    </header>
                    <main className="App__main">{this.renderMainRoutes()}</main>
                </div>
            </Context.Provider>
        );
    }
}

export default App;

import React from 'react'
import '../css/Notes.css'
import { useSelector, useDispatch } from 'react-redux'
import inputActions from '../redux/actions/inputActions'
import formActions from '../redux/actions/formActions'
import Note from './Note'

const Notes = () => {
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes.notes)
    
    const onNoteClicked = (note, index) => {
        dispatch(formActions.setFormDisplay())
        dispatch(inputActions.setInputId(index))
        dispatch(inputActions.setInputTitle(note.title))
        dispatch(inputActions.setInputContent(note.content))
    }

    
    if(notes.length === 0 ) {
        return (
            <div className="noNote">
                There are no notes yet.<br /> Please create a new one :)
            </div>
        )
    }

    return(
        <div>
            <h4 className="number">{notes.length > 1 ? `${notes.length} notes available` : `${notes.length} note available`}</h4>
            <div className="notes">
            {notes.map((note, index) => {
                if(note){
                    return(
                        <Note 
                            key={index}
                            id={index}
                            title={note.title}
                            content={note.content}
                            onNoteClicked={() => {
                                onNoteClicked(note, index);
                            }}
                        />
                    )
                }
                return null
            })}
            </div>
        </div>
    )
}

export default Notes


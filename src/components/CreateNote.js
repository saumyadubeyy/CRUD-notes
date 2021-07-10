import React from 'react'
import '../css/CreateNote.css'
import { useSelector, useDispatch } from 'react-redux';
import inputActions from '../redux/actions/inputActions';
import noteActions from '../redux/actions/noteActions';
import formActions from '../redux/actions/formActions';

const CreateNote = () => {
    
    const id = useSelector(state => state.inputs.id)
    const title = useSelector(state => state.inputs.title)
    const content = useSelector(state =>state.inputs.content)
    const dispatch = useDispatch();

    const addNote = () => {
        if(title && content.length>150) {
            dispatch(noteActions.addNote({
                title,
                content
            }))
            dispatch(inputActions.resetInput())
            dispatch(formActions.setFormDisplay())
        }
    }

    const updateNote = () => {
        if(title && content.length >150){
            dispatch(noteActions.updateNote(id, {
                title, content
            }))
            dispatch(inputActions.resetInput())
            dispatch(formActions.setFormDisplay())           
        }  
    }
    
    return (
        <div className="form">
            <h3>{id === -1 ? "NEW NOTE" : "UPDATE NOTE"}</h3>
            <div>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => dispatch(inputActions.setInputTitle(e.target.value))}
                    className="title"
                />
            </div>
            <div>
                <textarea 
                    placeholder="Description (minimum characters: 150)"
                    value={content}
                    onChange= {(e) => dispatch(inputActions.setInputContent(e.target.value))}
                    minLength="150"
                    rows="15"
                    cols="45"
                    className="textarea"
                />
            { content.length <150 ? 
                <p className = {content.length < 150 ? 'error' : 'noError'}>{150 - content.length} characters remaining</p> :
                <p style={{fontWeight: "bold"}}>Total: {content.length} characters</p>
            }
                <button onClick={id === -1 ? addNote : updateNote} className="btn">
                    {id === -1 ? "ADD NOTE" : "UPDATE NOTE"}
                </button>
            </div>
        </div>
    )
}

export default CreateNote


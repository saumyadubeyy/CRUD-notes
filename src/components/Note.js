import React, { useState } from 'react'
import '../css/Note.css'
import noteActions from '../redux/actions/noteActions'
import inputActions from '../redux/actions/inputActions'
import { useDispatch} from 'react-redux'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const Note = ({id, title, content, onNoteClicked}) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    const dispatch = useDispatch();
    
    const deleteNote = () => {
        dispatch(noteActions.deleteNote(id))
        dispatch(inputActions.resetInput())
    }    

    return (
        <main className="main">
                <div className="note">
                    <h2 style={{textTransform: "capitalize"}}>{title}</h2>
                    <p>{content.substring(0,150)}...</p>
                    <div>
                        <button onClick={() => setIsModalOpen(true)} className="btnP">View</button>
                        <button onClick={onNoteClicked} className="btnP">Edit</button>
                        <button onClick={deleteNote} className="btnP">Delete</button>
                    </div>
                </div>
                <Modal 
                    isOpen={isModalOpen} 
                    onRequestClose={() => setIsModalOpen(false)}
                    shouldCloseOnOverlayClick={false}
                    className="viewModalContent animate-modal"
                    overlayClassName="viewModalOverlay"
                >
                    <div className="viewNote">
                        <h2 className="viewTitle">{title}</h2>
                        <p className="viewContent">{content}</p>
                        <button onClick={() => setIsModalOpen(false)} className="cross top">X</button>
                    </div>
                </Modal>
        </main>
    )
}

export default Note

import React from 'react'
import '../css/HomePage.css'
import formActions from '../redux/actions/formActions'
import { useDispatch, useSelector } from 'react-redux'
import CreateNote from './CreateNote'
import Notes from './Notes'
import inputActions from '../redux/actions/inputActions'
import Modal from 'react-modal'
import img from '../assets/main.png'

const HomePage = () => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.formDisplay)

  const newNote = () => {
    dispatch(formActions.setFormDisplay())
    dispatch(inputActions.resetInput())
  }

    return (
        <div>
            <div className="img">
                <img src={img} alt='' className="img" />
            </div>
              <Modal 
                  isOpen={display} 
                  onRequestClose={newNote}
                  shouldCloseOnEsc={false}
                  shouldCloseOnOverlayClick={false}
                  className="content animate-modal"
                  overlayClassName="overlay"
              >
              <button onClick={newNote} className="cross top">X</button>
                  <CreateNote  />
              </Modal>
              <Notes />
              <div>
                <button onClick={newNote} className="plus">New Note</button>
              </div>
        </div>
    )
}

export default HomePage

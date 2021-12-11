import React from 'react'
import '../css/HomePage.css'
import formActions from '../redux/actions/formActions'
import { useDispatch, useSelector } from 'react-redux'
import CreateNote from './CreateNote'
import Notes from './Notes'
import inputActions from '../redux/actions/inputActions'
import Modal from 'react-modal'
import img from '../assets/main.png'
import { auth } from "../service/firebase"
import { signInWithGoogle } from "../service/firebase";

const HomePage = ({user}) => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.formDisplay)

  const newNote = () => {
    dispatch(formActions.setFormDisplay())
    dispatch(inputActions.resetInput())
  }

    return (
        <div>
          {
            user ?
              <div> 
                <nav>
                    {user ? 
                        <h4 className='name'>Welcome, {user.displayName} </h4>: <h5>ssup</h5>}
                        <div className="nav">
                          {user ? <h4 className="signOut" onClick={() => auth.signOut()}>Sign Out</h4>: <h4></h4>}
                      </div>
                </nav>
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
                    <button onClick={newNote} className="plus">New note</button>
                </div> 
              </div> 
              : 
              <div className='else'>
                  
                  <h4 className="greet">Hello, welcome <br/>You can create, display, modify and delete your notes using this web-app.<br/>Sign in right now, and start creating :)</h4>        
                  <div className="signIn" onClick={signInWithGoogle}>Sign In</div>

                  <div className="img">
                      <img src={img} alt='' className="img" />
                  </div>
                  <div className='ps'>PS. I'm still learning how to add database to one's application using Firestore Database.<br/>Therfore, as of now, there is no database linked to this application, so do not save important data which you would like to retrieve later in your notes. <br/>Thank you :)</div>
                </div>
          }
            
        </div>
    )
}

export default HomePage

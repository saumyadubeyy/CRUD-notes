import React from 'react'
import '../css/Navbar.css'
import firebase, { auth } from "../service/firebase"
import {useState, useEffect} from "react"
import { signInWithGoogle } from "../service/firebase";

const Navbar = () => {
    const [user,setUser] = useState(" ")

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])
    return (
            <nav>
                <div>
                    {user ? 
                        <h4>Welcome, {user.displayName} </h4>: <h4 className="signIn" onClick={signInWithGoogle}>Sign In</h4>}
                </div>
                <div className="nav">
                    {user ? <h4 className="signOut" onClick={() => auth.signOut()}>Sign Out</h4>: <h4></h4>}
                </div>
            </nav>
    )
}

export default Navbar

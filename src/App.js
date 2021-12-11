import React, {useState, useEffect} from 'react'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import firebase from "./service/firebase"

const App = () => {
  const [user,setUser] = useState(" ")

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
        })
    }, [])

  return (
    <div>
      <HomePage user={user} />
      <Footer />
    </div>
  )
}

export default App


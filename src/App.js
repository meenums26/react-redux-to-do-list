import React from 'react'
import AllNotes from './components/AllNotes'
import Header from './Header'
import CreateNote from './components/CreateNote'
import Favourites from './components/Favourites'
const App = () => {
   
    return (
        <div className="container-fluid">
            <Header/>
            <CreateNote/>
            <hr className="breakeLine"/>
            <AllNotes/>
            <hr className="breakeLine"/>
            <Favourites/>
        </div>
    )
}

export default App

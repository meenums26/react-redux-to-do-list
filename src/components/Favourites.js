import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const Favourites = ({notes}) => {
    return (
        <div className="favNotes p-5">
            <h4>My Favourites</h4>
            <div className="row">
        {
            notes.filter(note=>note.isFavourite===true)
            .map(note=><Note note={note} key={note.id}/>)
        }
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    notes:state.notes
})
export default connect(mapStateToProps)(Favourites)

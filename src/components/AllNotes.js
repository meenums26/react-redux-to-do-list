import React from 'react'
import Note from './Note'
import {connect} from 'react-redux'
const AllNotes = ({notes}) => {
    
    return (
        <div className="allNotes p-5">
            <h4>All Notes</h4>
            <div className="row">
            {
               notes.map((note)=><Note key={note.id} note={note}/>)
            }
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    notes:state.notes
})
export default connect(mapStateToProps)(AllNotes)

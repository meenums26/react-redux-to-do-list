import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { toggle_note } from '../redux/actions/noteActions'
import {FaHeart} from 'react-icons/fa'
import {FiHeart,} from 'react-icons/fi'

const Note = ({note,toggle_note}) => {
    return (
        <div id="note">
            <Card styel={{width :'18rem'}}>
                <Card.Body>
                    <Card.Title>{note.date}</Card.Title><br/>
                    <Card.Text>{note.note}</Card.Text><br/>
                </Card.Body>
                <Button className="btn" id="toggleButton" onClick={()=>toggle_note(note.id)}>{note.isFavourite?<FaHeart/>:<FiHeart/>}</Button>
            </Card>
        </div>
    )
}

export default connect(null,{toggle_note})(Note)

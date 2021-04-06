import React,{useState} from 'react'
import {connect} from 'react-redux'
import {add_new_note} from '../redux/actions/noteActions'


const CreateNote = ({add_new_note}) => {
    const[data,setData] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const note = {
            id : Math.random(),
            date:new Date().toJSON().slice(0,10),
            isFavourite:false,
            note:data
        }
      add_new_note(note)
    }
    return (
        <div id="createNote" className="p-5">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea col="3" row="5" className="form-control" placeholder="Write your notes ...." value={data} onChange={(e)=>setData(e.target.value)} required ></textarea>
                    <button className="btn createBtn" type="submit">Add Note</button>
                </div>
            </form>
            
        </div>
    )
}

// const mapDispatchToProps = dispatch =>{
//    return{
//        add_new_note : (note)=> dispatch({
//         type : "ADD_NOTE",
//         payload : note
//        })
//    }
// }

export default connect(null,{add_new_note})(CreateNote)

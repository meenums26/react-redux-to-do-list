


const initialState = {
    notes :[{
        id:1,
        date:new Date().toJSON().slice(0,10),
        isFavourite:false,
        note:"Write your note!"
    }]
}

const reducer = (previousState = initialState,action)=>{
    const {type,payload} =action;
    switch(type){
        case "ADD_NOTE":
            return {
                ...previousState,
                notes : [...previousState.notes,payload]
            }
        case "TOGGLE_NOTE":
            const new_notes = previousState.notes.slice()
            const index = new_notes.findIndex(note=>note.id=== payload)  
            const note = new_notes[index] 
            const new_note={
                ...note,
                isFavourite:!note.isFavourite
            }
            new_notes[index]=new_note
            return{
                ...previousState,
                notes:new_notes
            }
        default : return previousState    
    }

}

export default reducer
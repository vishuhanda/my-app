import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from "react-bootstrap";
import {useState} from "react";

export default function Badges(){
    let initial_notes = [
        {
            "id":"1",
            "note_name":"name1",
        },
        {
            "id":"2",
            "note_name":"name2",
        },
        {
            "id":"3",
            "note_name":"name3"
        },
        {
            "id":"4",
            "note_name":"name4"
        }
    ]


    const [onInitNotesState,onNotesDeleteState]= useState(initial_notes)
    let onEdit = (note)=>{
        console.log(note)
    }
    let onDelete = (noteId) =>{
        onNotesDeleteState(onInitNotesState.filter((n) => n.id !== noteId))
    }

    return(
        <div className="row">
            <div className="col-8 mx-auto">
            {
                onInitNotesState.map((note)=>{
                   return(
                           <div className="row col-12 alert alert-primary" role="alert" key={note.id}>
                               <div className="col-6">
                                   {note.note_name}
                               </div>
                               <div className="col-2">
                               <Button className="w-100" onClick={() => onEdit(note)}>Edit</Button>
                               </div>
                               <div className="col-2">
                               <Button className="w-100" onClick={() => onDelete(note.id)}>Delete</Button>
                               </div>
                           </div>
                )
                })
            }
            </div>
        </div>
    )


}
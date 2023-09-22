import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, setActiveNote, savingNewNotes, setNote } from "./";
import { LoadNotes } from "../../helpers";


export const starNewNote = ()=>{
    return async (dispatch, getState)  =>{
        
        dispatch(savingNewNotes());
        const {uid} = getState().auth;
        const newNote = {
        title: '',
        body: '',
        date: new Date().getTime(),
        }
        const newDoc = doc(collection( FirebaseDB, `${uid}/journal-_-/notas`) );
        await setDoc(newDoc, newNote);
        newNote.id = newNote.id;

        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }

}

export const startLoadingNote = () =>{

        return async(dispatch, getState) => {
        
            const {uid} = getState().auth; 
            if(!uid) throw new Error('No deberias de ser capas de verme. uid error.');
            
            const notes = await LoadNotes(uid);

            dispatch(setNote(notes));

        }

}
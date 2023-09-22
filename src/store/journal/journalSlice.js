import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'acd123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls:[],//http://foto.jpg, http://foto2.jpg, http://foto3.jpg 
        // },
    },
    reducers: {
        savingNewNotes: (state, ) => {
            state.isSaving = true; 
        },
        addNewEmptyNote:(state, action)=>{
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) =>{
            state.active = action.payload; 
        },
        setNote: (state, action) =>{
            state.notes =action.payload;
        },
        setSaving: (state) =>{
        
        },
        upDateNote: (state, action) =>{
        
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    savingNewNotes,
    addNewEmptyNote,
    setActiveNote,
    setNote,
    setSaving,
    upDateNote,
} =journalSlice.actions;
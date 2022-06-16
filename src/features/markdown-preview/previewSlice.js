import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
    name: 'markdown',
    initialState: {
        text: ''
    }, 
    reducers: {
        add: (state, text) => {
            state.text = text.payload            
        }
    }
})

export const { add } = previewSlice.actions
export default previewSlice.reducer
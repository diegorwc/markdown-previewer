import { createSlice } from '@reduxjs/toolkit';

export const previewSlice = createSlice({
    name: 'markdown',
    initialState: {
        text: '# H1 \n ## H2 \n [google](https://google.com.br) \n\n`<div></div>` \n\n    console.log("hello") \n\n1. item1\n1. item1 \n\n > this is a blockquote. ![Tux](https://mdg.imgix.net/assets/images/tux.png?auto=format&fit=clip&q=40&w=100) **bold**'
    }, 
    reducers: {
        add: (state, text) => {
            state.text = text.payload            
        }
    }
})

export const { add } = previewSlice.actions
export default previewSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const noticeStackSlice = createSlice({
    name: 'noticeStack',
    initialState: {
        list: []
    },
    reducers: {
        addNotice: (state, action) => {
            const {msg, type, callback} = action.payload;

            const newList = [...state.list]
            newList.push({msg, type, callback});
            state.list = newList;

            // Temporary obnoxious logging message. Sorry, having a hard time finding the message...
            console.log('%c (╯°□°）╯︵ ┻━┻', 'color: #bbdd00; font-size: 64px', state.list,);
        }
    }
})

export const { addNotice } = noticeStackSlice.actions;
export default noticeStackSlice.reducer;
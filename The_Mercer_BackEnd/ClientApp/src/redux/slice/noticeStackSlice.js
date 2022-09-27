import { createSlice } from "@reduxjs/toolkit";

const debugLog = (state) => {
    // Temporary obnoxious logging message. Sorry, having a hard time finding the message...
    console.log('%c NOTICE UPDATE (╯°□°）╯︵ ┻━┻', 'color: #bbdd00; font-size: 64px', state.list,);
}

export const noticeStackSlice = createSlice({
    name: 'noticeStack',
    initialState: {
        newNoticeId: 0,
        list: []
    },
    reducers: {
        addNotice: (state, action) => {
            const { msg, type, callback } = action.payload;

            // Check if a notification with this message already exist before adding a new one
            const notice = state.list.find(notice => notice.msg === action.payload.msg);
            
            if (!notice) {
                state.newNoticeId += 1;
                const id = `notice-${state.newNoticeId.toString()}`;

                const newList = [...state.list]
                newList.push({ msg, type, callback, id });
                state.list = newList;
            }
        },

        removeNotice: (state, action) => {
            const id = action.payload;
            state.list = state.list.filter(notice => notice.id !== id);
        }
    }
})

export const { addNotice, removeNotice } = noticeStackSlice.actions;
export default noticeStackSlice.reducer;
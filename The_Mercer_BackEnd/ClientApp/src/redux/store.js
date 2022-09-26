import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './slice/authSlice'
import noticeStackReducer from './slice/noticeStackSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    noticeStack: noticeStackReducer,
});

const store = configureStore({

    reducer: rootReducer,

});

export default store;
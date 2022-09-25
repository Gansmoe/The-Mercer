import React from 'react'
import { removeNotice } from '../redux/slice/noticeStackSlice';
import { useDispatch } from "react-redux";

const Notice = ({ msg, type, callback, id }) => {
    // Class Name is for cosmetic styling purposes. Default options are "info" and "danger".
    const className = type ? `notice ${type}` : `notice info`; // If left blank it will default to "info"

    const dispatch = useDispatch();

    const handleClick = (e) => {

        // Execute callback if provided
        if (callback) {
            callback();
        }

        // Destroy Notice
        const id = e.target.id;
        dispatch(removeNotice(id));
    }

    return (
        <div className={className}>
                <div id={id} className='notice-button no-select' onClick={handleClick}>
                    {msg}
                </div>
        </div>
    )
}

export default Notice;
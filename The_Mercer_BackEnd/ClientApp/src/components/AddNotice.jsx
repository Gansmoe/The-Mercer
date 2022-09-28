import { addNotice } from "../redux/slice/noticeStackSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AddNotice = ({ msg, info, callback }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addNotice(notice));
    }, [])

    const notice = {
        msg: msg,
        type: info,
        callback: callback
    };

    return (
        <></>
    )
}

export default AddNotice;
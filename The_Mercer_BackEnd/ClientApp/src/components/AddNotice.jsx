import { addNotice } from "../redux/slice/noticeStackSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const AddNotice = ({ msg, info, callback }) => {

    const dispatch = useDispatch();
    useEffect(() => {

    }, [])

    const notice = {
        msg: msg,
        type: info,
        callback: callback
    };

    dispatch(addNotice(notice));

    return (
        <></>
    )
}

export default AddNotice;
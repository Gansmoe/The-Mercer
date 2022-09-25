import Notice from "./Notice"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NoticeStack = ({ list }) => {
    const [notices, setNotices] = useState([]);
    const getNoticeList = useSelector((state) => state.noticeStack.list);
    
    useEffect(() => {
        setNotices(getNoticeList);
    }, [getNoticeList])

    // Some experimental stuff, move along...
    const addNotice = (msg, type, callback) => {
        const newNotice = {
            msg: msg,
            type: type,
            callback: callback
        }
        setNotices(notices.push(newNotice));
    }
    //..........................................

    return (
        <div className="notice-list">
            {notices.length > 0 ?
                notices.map((notice, key) => {
                    return (
                        <Notice msg={notice.msg} type={notice.type} callback={notice.callback} id={notice.id} key={key} />
                    )
                })
                : <></>
            }
        </div>
    )
}

export default NoticeStack;
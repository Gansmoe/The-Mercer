import Notice from "./Notice"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NoticeStack = () => {
    const [notices, setNotices] = useState([]);
    const getNoticeList = useSelector((state) => state.noticeStack.list);
    
    useEffect(() => {
        setNotices(getNoticeList);
    }, [getNoticeList])

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
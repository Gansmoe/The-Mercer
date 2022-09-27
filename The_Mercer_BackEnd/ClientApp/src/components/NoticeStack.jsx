import Notice from "./Notice"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const NoticeStack = () => {
    const [notices, setNotices] = useState([]);
    const getNoticeList = useSelector((state) => state.noticeStack.list);
    
    useEffect(() => {
        setNotices(getNoticeList);
    }, [getNoticeList])

    const title = 'The Mercer Hotel';
    const counter = notices.length;
    counter > 0 ? document.title = `(${counter}) ${title}` : document.title = title;

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
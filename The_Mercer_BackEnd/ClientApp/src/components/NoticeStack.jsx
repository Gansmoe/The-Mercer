import Notice from "./Notice"
import { useState, useEffect } from "react";

const testNotice = [{
    msg: 'There is yoghurt in the swimming pool.',
    type: 'info',
    callback: (id) => {
        const target = document.getElementById('3'); // id should be passed here in normal cases
        window.scrollTo(0, target.offsetTop);
    }
}];

const NoticeStack = ({ list }) => {
    const [notices, setNotices] = useState(testNotice);

    useEffect(() => {
        if (notices.length === 0) setNotices(list);
    }, [list]);

    return (
        <div className="notice-list">
            {notices.length > 0 ?
                notices.map((notice, key) => {
                    return (
                        <Notice msg={notice.msg} type={notice.type} callback={notice.callback} key={key} />
                    )
                })
                : <p>No list :(</p>
            }
            {console.log('hmmmmmmm')}
        </div>
    )
}

export default NoticeStack;
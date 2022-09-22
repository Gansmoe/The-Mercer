const Notice = ({ msg, type, callback, scrolltarget }) => {

    // Class Name is for cosmetic styling purposes. Default options are "info" and "danger".
    const className = type ? `notice ${type}` : `notice info`; // If left blank it will default to "info"

    const handleClick = (e) => {

        // Execute callback if provided
        if (callback) {
            callback();
        }

        // Destroy Notice
        const parent = e.target.parentNode.parentNode;
        while (parent.lastElementChild) {
            parent.removeChild(parent.lastElementChild);
        }
    }

    return (
        <div className={className}>
                <div className='notice-button' onClick={handleClick}>
                    {msg}
                </div>
        </div>
    )
}

export default Notice;
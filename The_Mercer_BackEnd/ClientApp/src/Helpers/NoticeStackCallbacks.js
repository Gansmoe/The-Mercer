// Redux does not like passing callbacks in payloads since they cannot be serialized, hence we refer to them by a string identity instead. 
// The args array contains all the parameters you'd like to pass to the function. For instance: A function's 3rd parameter would be at args[2].

// Scrolls to an element by id name
const scrollToElementId = (args) => {
    const target = document.getElementById(args[0]);
    window.scrollTo(0, target.offsetTop);
}

// Add all callback functions to this object
const NoticeStackCallbacks = {
    scrollToElementId: scrollToElementId
}

export default NoticeStackCallbacks;
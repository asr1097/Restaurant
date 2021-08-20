const clearMain = () => {
    const mainDiv = document.getElementById('mainDiv');
    while (mainDiv.firstChild) {
        mainDiv.firstChild.remove();
    }
};

export {clearMain};
document.addEventListener("DOMContentLoaded", function () {



    const buttonInfo = {
        name: 'Ссылка'
    }

    const buttonSize = {
        width: 300 + 'px',
        height: 150 + 'px'
    }


    const button = {
        ...buttonInfo,
        ...buttonSize
    }

    console.table(button);


})

'use strict'

document.addEventListener('keydown', function(e){
    if (e.key == "Enter") {
        bash.innerHTML = `${bash.innerHTML}<br/>`;

    } else if (e.key == "Backspace") {
        bash.innerHTML = bash.innerHTML.slice(0, -1);

    } else {
        if (e.key.length < 2){
            bash.innerHTML = bash.innerHTML + e.key;
        }
    }
})


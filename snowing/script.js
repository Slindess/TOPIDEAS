
function render(){
    let snowflakes = document.querySelectorAll('.snowflake');

    for(let snowflake of snowflakes){
        let top = parseInt(snowflake.style.top.slice(0, -2));
        snowflake.style.top = (top + 1) + 'px';
        console.log(top, )

        if (top >= (document.documentElement.scrollHeight - 50)){
            snowflake.remove();
        }
    }

    let creation = 0 - 0.5 + Math.random() * (100 - 0 + 1);
    creation = Math.round(creation);
    if (creation < 5){
        let width = document.documentElement.clientWidth;
        x = Math.round(0 - 0.5 + Math.random() * (width - 0 + 1));
        let newSnowFlake = document.createElement('img');
        newSnowFlake.classList.add('snowflake');
        newSnowFlake.style.position = 'absolute';
        newSnowFlake.style.top = '0px';
        newSnowFlake.style.left = x + 'px';
        newSnowFlake.src = 'snowflake.png';
        document.body.appendChild(newSnowFlake);
    }


}

let interval = setInterval(render, 30)

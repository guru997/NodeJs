let time = 0;

let timer = setInterval(function(){
    time += 1;
    console.log(time + "seconds");
    if(time >= 5)
    {
        clearInterval(timer);
    }
},1000);

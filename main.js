function updateClock(){
    let updateDate = new Date();
    let hours = updateDate.getHours();
    let minutes = updateDate.getMinutes();
    let seconds = updateDate.getSeconds();

    let clock = document.getElementById('clock')

    // teste com condições ternarias
    // (hours < 10 )? clock.innerHTML = `0${hours}` : clock.innerHTML = `${hours}`;
    // (minutes < 10 )? clock.innerHTML += `:0${minutes}` : clock.innerHTML += `:${minutes}`;
    // (seconds < 10 )? clock.innerHTML += `:0${seconds}` : clock.innerHTML += `:${seconds}`;

    if  (hours < 10){
        clock.innerHTML = `0${hours}`
    }else{
        clock.innerHTML = `${hours}`
    }

    if  (minutes < 10){
        clock.innerHTML += `:0${minutes}`
    }else{
        clock.innerHTML += `:${minutes}`
    }
    if (seconds < 10){
        clock.innerHTML += `:0${seconds}`;
    }else{
        clock.innerHTML += `:${seconds}`;
    }

}

setInterval(updateClock, 1000);
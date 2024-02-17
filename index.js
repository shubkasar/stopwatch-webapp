const disp = document.getElementById("disp");
let timer = null;
let startTime = 0;
let isRunning = false;
let elapsedTime = 0;

const start = () => {
    
    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        // console.log(timer);
        isRunning = true;
    }
    
}

const stop = () => {

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

const reset = () => {

    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    disp.textContent = "00:00:00:00";
}

const update = () => {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60 ));
    let mins = Math.floor(elapsedTime / (1000 * 60) % 60);
    let secs = Math.floor(elapsedTime / 1000 % 60);
    let milisecs = Math.floor(elapsedTime % 1000 / 10);

    hrs = String(hrs).padStart(2, "0");
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    milisecs = String(milisecs).padStart(2, "0");
    
    disp.textContent = `${hrs}:${mins}:${secs}:${milisecs}`;
}
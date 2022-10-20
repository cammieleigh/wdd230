let temp = document.querySelector('#t').textContent;
let speed = document.querySelector('#w').textContent;
let chill;

if ((temp <= 50) || (speed < 3))
{
    chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
    document.querySelector('#chill').textContent = chill;
}

else{
    document.querySelector('#chill').textContent = 'N/A';
}
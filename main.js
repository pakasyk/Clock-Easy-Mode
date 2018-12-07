let h = new Date().getHours();
if (h>12) {
    h = h - 12;
}
let m = new Date().getMinutes();

let s = new Date().getSeconds();

document.querySelector('.minute').style.transform = `rotate(${m*6}deg)`;
document.querySelector('.hour').style.transform = `rotate(${h*30}deg)`;
console.log(m);
console.log(h);

let runSec = () => {
    document.querySelector('.second').style.transform = `rotate(${s*6}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${m*6}deg)`;
    document.querySelector('.hour').style.transform = `rotate(${h*30}deg)`;
    s++;
    m+=1/60;
    h+=1/60/60;
    console.log(h);
    // if (s>59) {
    //     s=0;
    //     m++;
    //     if(m>59){
    //         m=0;
    //         h++;

    //     }
       
       
    // }
}

let inter = setInterval(runSec, 1000);















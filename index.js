let x=new Date();
let clock=document.querySelector(".clock");
let hr=x.getHours().toString().padStart(2,"0");
let min=x.getMinutes().toString().padStart(2,"0");
let ss=x.getSeconds().toString().padStart(2,"0");
//clock.innerText=`${hr}:${min}:${ss}`;

setInterval(()=>{
  x=new Date();
  let parity;
  hr=x.getHours();
  if(hr>11){
    parity="pm";
    if(hr>12)
    hr-=12;
  }
  else
  parity="am";
  hr=hr.toString().padStart(2,"0");
  min=x.getMinutes().toString().padStart(2,"0");
  ss=x.getSeconds().toString().padStart(2,"0");
  clock.innerText=`${hr}:${min}:${ss} ${parity}`;
},1000);

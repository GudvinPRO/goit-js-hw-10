import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";let a,o;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],o=a-new Date,o<1?m.error({color:"red",position:"topRight",message:"Please choose a date in the future"}):(e.disabled=!1,f.disabled=!0,e.classList.add("btn-active"))}};function p(t){const s=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:d,seconds:u}}l("#datetime-picker",h);const f=document.querySelector("#datetime-picker"),e=document.querySelector("button"),r=document.querySelectorAll(".value");e.disabled=!0;e.addEventListener("click",t=>{const i=setInterval(()=>{if(o=a-new Date,e.classList.remove("btn-active"),o<1){e.disabled=!0,clearInterval(i);return}const n=p(o);r[0].innerText=n.days.toString().padStart(2,"0"),r[1].innerText=n.hours.toString().padStart(2,"0"),r[2].innerText=n.minutes.toString().padStart(2,"0"),r[3].innerText=n.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map

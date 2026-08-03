const div=document.querySelector('div');
setInterval(()=>{
    let time=new Date();//current date aut time computer se liya
    div.innerText=time.toLocaleTimeString();
},1000)
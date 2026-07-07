const bg=document.getElementById("bg");

document.addEventListener('mousemove',e=>{
    const x=e.clientX/window.innerWidth*100;
    const y=e.clientY/window.innerHeight*100;

    bg.style.setProperty('--x',`${x}%`);
    bg.style.setProperty('--y',`${y}%`);
});

if(window.DeviceOrientationEvent){
    window.addEventListener('deviceorientation',e=>{
        const speed=25;
        const x=e.gamma/90*speed;
        const y=e.beta/180*speed;

        bg.style.setProperty('--x',`${x}%`);
        bg.style.setProperty('--y',`${y}%`);
    });
}
let sf=document.getElementById('starfield');
let ctx=sf.getContext('2d');

/*set canvas size*/
const width=sf.width=window.innerWidth+50;
const height=sf.height=window.innerHeight+50;
//set canvas style
sf.style.position='absolute';
sf.style.inset='0';
sf.style.zIndex='1';
sf.style.pointerEvents='none';

/*set the colors for star glowing*/
const glow=[
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    'rgb(255, 255, 255)',
    '#d2fff7',
    '#ffc2f7'
];
/*set some basic numbers for edit the speed of diff kind of stars*/
const speedPara=[1,0.8,0.6];

/*store the stars in an array*/
const stars=[];
const numStars=250;

for (let i=0;i<=numStars;i++){
    //because I want bigger stars to make more glow,so it is used for r and glowIntensity
    let numRand=Math.random()**2;
    let speedRand=~~(Math.random()*speedPara.length); 
    stars.push({
        specNum:numRand,
        x:Math.random()*width,
        y:Math.random()*height,
        r:numRand+0.4, //star radius
        glowColor:~~(Math.random()*glow.length),
        glowIntensity:numRand*10+0.1,
        vx:-0.8*speedPara[speedRand],//velocity x (use speedPara value)
        vy:0.5*speedPara[speedRand]//velocity y (use speedPara value)
    })
}

function drawStar(){
    ctx.clearRect(0,0,width,height);
    glow.forEach((color,index)=>{
        ctx.beginPath();
        ctx.shadowColor=color;
        stars.forEach(star=>{
            if (star.glowColor===index){
                star.x+=star.vx;
                star.y+=star.vy;
                //out-of-bounds movement detection and resetting the position of the star
                if (star.x>width) star.x-=width;
                if (star.y>height) star.y-=height;
                if (star.x<0) star.x+=width;
                if (star.y<0) star.y+=height;
                if (star.x<0 || star.x>width) star.y=Math.random()*height;
                else if (star.y<0 || star.y>height) star.x=Math.random()*width;

                //create a radial gradient for the star inner glow effect
                const gradient=ctx.createRadialGradient(star.x,star.y,0,star.x,star.y,star.r);
                gradient.addColorStop(0,'white');
                gradient.addColorStop(1,color);
                ctx.fillStyle=gradient;

                ctx.shadowBlur=star.glowIntensity;
                ctx.moveTo(star.x,star.y);
                ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
            }
        });
        ctx.fill();
    })
    ctx.shadowBlur=0;
    requestAnimationFrame(drawStar);
}

drawStar();
canvas=document.getElementById("myCanvas")
var ctx=canvas.getContext("2d");
ox=" ";
oy=" ";
newwidth = screen.width -60;
newheight = screen.height - 300;
if(screen.width < 992)
{
    document.getElementById("myCanvas").width=newwidth
    document.getElementById("myCanvas").height=newheight
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart)
function my_touchstart(e){
    c=document.getElementById("clr").value;
    l=document.getElementById("wd").value;
}
canvas.addEventListener("touchmove",my_touchmove)
function my_touchmove(e){
    nx=e.touches[0].clientX-canvas.offsetLeft;
    ny=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=c;
        ctx.lineWidth=l;
        ctx.moveTo(ox,oy)
        ctx.lineTo(nx,ny)
        ctx.stroke(); 
    ox=nx;
    oy=ny;
}
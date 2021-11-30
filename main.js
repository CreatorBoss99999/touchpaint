canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var mouseEvent = "";

var color = "color";
var width_of_line = "width_of_line";

canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(){
        color = "color";
        width_of_line = "width_of_line";
        mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(){
        mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(){
        mouseEvent = "mouseleave";
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e)
{
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touchy = e.touches[0].clienty - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        last_position_of_touch_x = current_position_of_touch_x;
        last_position_of_touch_y = current_position_of_touch_y;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{ 
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clienty - canvas.offsetTop;
        if (mouseEvent == "mouseDown") {
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = width_of_line;
                ctx.moveTo(last_position_of_x, last_position_of_y);
                ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
                ctx.stroke();
}
        last_position_of_x = current_position_of_mouse_x;
        last_position_of_y = current_position_of_mouse_y;
}


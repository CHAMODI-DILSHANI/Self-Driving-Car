const canvas=document.getElementById("carCanvas");
canvas.width=200;

const context =canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(context);

//animate the motion of car
animate();

function animate(){
car.moving();

//removing the previous postion of car and fitting the canvas to the window
canvas.height=window.innerHeight;

//drawing car according to the new coordinates
car.draw(context);

//drawing animation frame
requestAnimationFrame(animate);
}
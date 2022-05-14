const canvas=document.getElementById("carCanvas");
canvas.width=200;

const context =canvas.getContext("2d");
const car = new Car(100,100,30,50);
car.draw(context);

animate();

function animate(){
car.moving();
canvas.height=window.innerHeight;
car.draw(context);
requestAnimationFrame(animate);
}
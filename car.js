class Car{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        //setting up speed and acceleration
        this.speed = 0;
        this.acceleration =0.2;
        this.maxSpeed = 2;
        this.friction=0.05;
        this.angle = 0;

        //control the car movements
        this.controls = new Controls;
    }

    moving(){
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }

        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        //to control the speed to not to go beyong maximum speed
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }

        //to apply brakes
        if(this.speed>0){
            this.speed-=this.friction;
        }

        if(this.speed<0){
            this.speed+=this.friction;
        }

        //to stop car moving automatically without pressing any key according to friction
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        //this.y-=this.speed;

        if(this.controls.left){
            this.angle+=0.03;
        }

        if(this.controls.right){
            this.angle-=0.03;
        }

        //making the vehicle move according to the turned direction
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

    //draw rectangle to represent a car
    draw(ctx){
        //making the vehicle rotate to left and right
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.w/2,
            -this.h/2,
            this.w,
            this.h
        );

        ctx.fill()
    }
}
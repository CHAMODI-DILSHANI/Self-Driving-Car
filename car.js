class Car{
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.controls = new Controls;
    }

    moving(){
        if(this.controls.forward){
            this.y-=2;
        }

        if(this.controls.reverse){
            this.y+=2;
        }

        if(this.controls.left){
            this.x-=2;
        }

        if(this.controls.right){
            this.x+=2;
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.w/2,
            this.y-this.h/2,
            this.w,
            this.h
        );

        ctx.fill()
    }
}
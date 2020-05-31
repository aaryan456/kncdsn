class Player{
    constructor(x,y,width,height){
        var options = {
        'restituiton':0.6,
        'friction':0.5,
        }
        this.body = Bodies.Rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(this.body,world)
    }
    display(){
        rect(this.body.x,this.body.y,this.body.width,this.body.height)
        
    }
}
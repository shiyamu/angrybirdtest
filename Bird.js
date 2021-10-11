class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.track = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 0 && this.body.position.x > 200){

    var position_array = [this.body.position.x,this.body.position.y]
    this.track.push(position_array);
    }

    for(var i=0;i<this.track.length;i++){
     image(this.smokeimage,this.track[i][0],this.track[i][1])
    }

    
  }
}

// snake component
class Snake{
  constructor(){
    this.icon_head = 'images/snake.png';
    this.icon_tail = 'images/snake-tail.png';
    this.x = randCords();
    this.y = randCords();
    this.direction = 'up';
    this.canvas = canvas;
    this.segments = [{x: 10,y: 0},{x: 10 , y: 24},{x: 10, y: 48}];
  }
  // canvas render()
  render(canvas){
    // segments
    for(var i =0;i<this.segments.length;i++){
      if(i == 0){
        var image_head = new Image;
        image_head.src = this.icon_head;
        var self = this;
        image_head.onload = function(){
        self.canvas.drawImage(image_head,self.segments[0].x,self.segments[0].y)
        }
      }else{
        var image_tail = new Image;
        image_tail.src = this.icon_tail;
        var self = this;
        image_tail.onload = function(){
        self.canvas.drawImage(image_tail,self.segments[1].x,self.segments[1].y)
      }
      this.canvas.fillRect(this.segments[i].x,this.segments[i].y,24,24);
    }
  }
}
}

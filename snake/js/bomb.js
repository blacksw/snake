
class Bomb{
  constructor(){
    this.icon_ok = 'images/bomb.png';
    this.x = randCords();
    this.y = randCords();
    this.direction = 'up';
    this.canvas = canvas;
  }
  // canvas render()
  render(canvas){
    // segments
        var image_ok = new Image;
        image_ok.src = this.icon_ok;
        var self = this;
        image_ok.onload = function(){
        self.canvas.drawImage(image_ok,self.x,self.y)
        }
      }
      clear(){
        this.canvas.clearRect(this.x,this.y,24,24);
      }

    }

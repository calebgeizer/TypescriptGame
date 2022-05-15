class GameSpace {
    width:number;
    height:number;
   
    constructor(width = 1920, height = 1080) {
      this.render(this.width,this.height);
    }

    render(x,y){
        const gamearea = this.createDiv(x,y,"white","game");
        gamearea.style.margin = "auto";
        
        document.body.appendChild(gamearea);
    }

    createDiv(x,y,color,tag){
        const el = document.createElement('div');
        el.style.width = x+"px";
        el.style.height = y+"px";
        el.style.background = color;
        el.id = tag;
        return el;
    }
}

const game = new GameSpace();

// TODO
//// - Create Function for JS to Render HTML
// - Define Class Structure
// - Define Project Scope

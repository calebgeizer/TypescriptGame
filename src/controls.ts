export default class Player {
    player:string;
    controlType:string = "keyboard";

    constructor() {
        
    }
    
    //* Define Player *//
    setPlayer(player:string) {
        this.player = player;
    }

    playerSelectListener(game){
        game.getSVG().addEventListener("click", function (event) {

            console.log(event.target);
            const rect = event.target as SVGRectElement;
        
            //if event target is rect
            if (rect.tagName === "rect") {
                this.player = rect.id;
                console.log(this.player);
            }
        });
    }


    //* Define Control Scheme *//
    // Pick a type of controls
    setControls(type:string) {
        if(type === "keyboard") {
            this.controlType = "keyboard";
        }else if(type === "mouse") {
            this.controlType = "mouse";
        }else {
            // Throw Error
            console.error("Controls type not found");
        }
    }


}
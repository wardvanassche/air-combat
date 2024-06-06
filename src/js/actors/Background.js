import {Actor, Vector, GraphicsGroup,} from 'excalibur'
import { Resources, ResourceLoader } from "../resources.js";

export class Background extends Actor {
        offset
        constructor() {
            super({width:Resources.Background.width, height:Resources.Background.height})
        }

        // voegt de Background toe aan de scene dmv een actor
        onInitialize(engine){
            const spaceImage = Resources.Background.toSprite()
            this.offset = spaceImage.width

        // verdeeld de achtergrond in 2 delen zodat hij oneindig doorloopt
            
            // zorgt ervoor dat de achtergrond beweegt
            this.graphics.anchor = new Vector(0,0)
            this.graphics.add(spaceImage)       
            this.pos = new Vector(0, 0)
            this.vel = new Vector(-110, 0)
        }


        onPostUpdate(engine, delta) {
            if (this.pos.x < -this.offset) {
                this.pos = new Vector(0, 0)
            }
        }
    }
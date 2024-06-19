import { Actor, CollisionType, GraphicsGroup, Vector, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import {Enemy} from "./Enemy.js";

export class Enemy1 extends Enemy {
    constructor() {
        super()
    }

    onInitialize(engine) {
        const act = new Actor({})

        act.graphics.use(Resources.Enemy.toSprite())
        this.addChild(act)


    }
}
import { Actor, CollisionType, GraphicsGroup, Vector, vec } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";
import {Enemy} from "./Enemy.js";

export class Enemy1 extends Enemy {
    constructor() {
        super()
    }
    onInitialize(engine) {
        const randomNumber = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
        this.pos = new Vector(960, randomNumber)
    }
}
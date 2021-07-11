import p5 from 'p5';
import {GameObject} from "../sys/GameObject";
import {GlobalState} from "../main";

export default class Player extends GameObject {
    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            width: 64,
            height: 64
        });
    }

    render(ctx: p5, state: GlobalState) {
        super.drawTexture(ctx, state.textures["test-texture.png"]);
    }

    tick(ctx: p5, state: GlobalState) {
        if (state.keys['w'] || state.keys['s'] || state.keys['a'] || state.keys['d'])
            this.pos = {
                x: this.pos.x + (state.keys['a'] ? -10 : 0) + (state.keys['d'] ? 10 : 0),
                y: this.pos.y + (state.keys['w'] ? -10 : 0) + (state.keys['s'] ? 10 : 0)
            }
    }

}
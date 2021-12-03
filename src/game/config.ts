import { MenuScene } from "./scenes/mainScene";

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 1080,
  height: 810,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [MenuScene],
  canvas: document.getElementById("game") as unknown as HTMLCanvasElement,
};

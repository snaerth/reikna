import Phaser from "phaser";

enum ImageNames {
  Sky = "sky",
}

export class MenuScene extends Phaser.Scene {
  constructor() {
    super("Menu-scene");
  }

  preload() {
    this.load.setBaseURL("http://labs.phaser.io");
    this.load.image(ImageNames.Sky, "assets/skies/space3.png");
  }

  create() {
    this.add.image(400, 300, ImageNames.Sky);
  }
}

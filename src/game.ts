import "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
    this.load.image("debug", "assets/tilesets/debug.png");
    this.load.spritesheet("food", "assets/tilesets/food-OCAL.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded", "tiles");
    const debugTileset = map.addTilesetImage("debug", "debug");
    const foodTileset = map.getTileset("food-OCAL");
    const belowLayer = map.createLayer("Below Player", tileset, 0, 0);
    const worldLayer = map.createLayer("World", tileset, 0, 0);
    const aboveLayer = map.createLayer("Above Player", tileset, 0, 0);
    const myNewLayer = map.createLayer("MyNewLayer", [debugTileset], 0, 0);
    const tileGid = debugTileset.firstgid;
    map.putTileAt(tileGid, 5, 5, false, myNewLayer);
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 600,
  scene: Demo,
};

const game = new Phaser.Game(config);

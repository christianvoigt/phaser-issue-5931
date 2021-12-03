import "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("tiles2", "assets/tilesets/debug.png");
    this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tileset2 = map.addTilesetImage("debug", "tiles2");
    const myNewLayer = map.createLayer("MyNewLayer", [tileset2], 0, 0);
    const tileGid = tileset2.firstgid;
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

function defineEverything(ig, sc) {
  ig.JSON_LOG = true;

  sc.ATitleScreenButtonGui = sc.TitleScreenButtonGui.extend({});

  sc.ATitleScreenGui = sc.TitleScreenGui.extend({
    init() {
      this.parent();
      this.removeChildGui(this.introGui);
      this.introGui = new ig.GUI.AIntroScreen(this._introDone.bind(this));
      this.addChildGui(this.introGui);
    },
  });

  ig.AGame = sc.CrossCode.extend({
    font: new ig.MultiFont('media/font/hall-fetica-bold.png', 16, 0),
    init() {
      this.parent();
      ig.gui.guiHooks.splice(
        ig.gui.guiHooks.findIndex((c) => c.gui instanceof sc.TitleScreenGui),
        1,
      );
      ig.gui.addGuiElement(new sc.ATitleScreenGui());
    },
    // draw() {
    //   this.parent();
    //
    //   var x = ig.system.width / 2,
    //     y = ig.system.height / 2;
    //
    //   let textBlock = new ig.TextBlock(this.font, 'helo', { speed: ig.TextBlock.SPEED.IMMEDIATE });
    //   textBlock.draw(x, y);
    // },
  });
}

export default class CCHijack {
  constructor() {
    console.log('hi');
    Object.defineProperty(globalThis, 'startCrossCode', {
      configurable: true,
      get: () => {
        return this.init;
      },
      set: function () {},
    });
  }

  init() {
    console.log('hello from startCrossCode!');
    defineEverything(ig, sc);
    ig.main(
      '#canvas',
      '#game',
      ig.AGame,
      window.IG_GAME_FPS || 60,
      window.IG_WIDTH,
      window.IG_HEIGHT,
      window.IG_GAME_SCALE,
      sc.StartLoader,
    );
  }
}

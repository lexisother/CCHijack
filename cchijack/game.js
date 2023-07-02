ig.module('cchijack.game')
  .requires('game.main', 'cchijack.intro-screen', 'cchijack.title-screen')
  .defines(() => {
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
  });

ig.module('cchijack.title-screen')
  .requires('game.feature.gui.screen.title-screen')
  .defines(() => {
    sc.ATitleScreenGui = sc.TitleScreenGui.extend({
      init() {
        this.parent();
        this.removeChildGui(this.introGui);
        this.introGui = new ig.GUI.AIntroScreen(this._introDone.bind(this));
        this.addChildGui(this.introGui);
      },
    });

    sc.ATitleScreenButtonGui = sc.TitleScreenButtonGui.extend({});
  });

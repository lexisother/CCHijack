export default class CCHijack {
  constructor() {
    Object.defineProperty(globalThis, 'startCrossCode', {
      configurable: true,
      get: () => {
        return this.init;
      },
      set: function () {},
    });
  }

  postload() {
    ig._loadScript('cchijack.game');
  }

  init() {
    ig.JSON_LOG = true;
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

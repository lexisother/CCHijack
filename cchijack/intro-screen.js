ig.module('cchijack.intro-screen')
  .requires('game.feature.gui.screen.intro-screen')
  .defines(() => {
    ig.GUI.AIntroScreen = ig.GUI.IntroScreen.extend({
      gui: {
        baseBG: {
          color: 'black',
          transitions: {
            DEFAULT: { state: {}, time: 0, timeFunction: KEY_SPLINES.LINEAR },
            HIDDEN: {
              state: { alpha: 0 },
              time: 0,
              timeFunction: KEY_SPLINES.LINEAR,
            },
          },
        },
        whiteBG: {
          color: 'white',
          transitions: {
            DEFAULT: { state: {}, time: 0.3, timeFunction: KEY_SPLINES.LINEAR },
            HIDDEN: {
              state: { alpha: 0 },
              time: 0.3,
              timeFunction: KEY_SPLINES.LINEAR,
            },
          },
        },
        blackBG: {
          color: 'black',
          transitions: {
            DEFAULT: { state: {}, time: 0.5, timeFunction: KEY_SPLINES.LINEAR },
            HIDDEN: {
              state: { alpha: 0 },
              time: 0.5,
              timeFunction: KEY_SPLINES.LINEAR,
            },
          },
        },
      },
      timeLine: [
        { time: 0, gui: 'baseBG', state: 'DEFAULT' },
        { time: 2, gui: 'whiteBG', state: 'DEFAULT' },
        { time: 4.5, gui: 'blackBG', state: 'DEFAULT' },
        { time: 5, end: true },
      ],
      transitions: {
        DEFAULT: { state: {}, time: 0, timeFunction: KEY_SPLINES.LINEAR },
        HIDDEN: {
          state: { alpha: 0 },
          time: 0,
          timeFunction: KEY_SPLINES.LINEAR,
        },
      },
    });
  });

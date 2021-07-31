import { MutableRefObject, useEffect, useRef, useState } from "react";

import Phaser from "phaser";

export const usePhaser = (
  config: Phaser.Types.Core.GameConfig
): [MutableRefObject<HTMLCanvasElement | null>, Phaser.Game | null] => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [game, setGame] = useState<Phaser.Game | null>(null);

  useEffect(() => {
    const gameConfig = config;
    gameConfig.canvas = canvasRef?.current ?? undefined;
    gameConfig.type = Phaser.CANVAS;
    const userDefinedPostBootCallback = config.callbacks?.postBoot;
    const auxilliaryPostBootCallback = (bootedGame: Phaser.Game) => {
      setGame(() => {
        return bootedGame;
      });
    };
    if (userDefinedPostBootCallback) {
      gameConfig.callbacks!.postBoot = (bootedGame: Phaser.Game) => {
        auxilliaryPostBootCallback(bootedGame);
        userDefinedPostBootCallback(bootedGame);
      };
    } else if (config.callbacks) {
      gameConfig.callbacks!.postBoot = auxilliaryPostBootCallback;
    } else {
      gameConfig.callbacks = {
        postBoot: auxilliaryPostBootCallback,
      };
    }
    const phaser = new Phaser.Game(gameConfig);
    return () => {
      phaser.destroy(false);
    };
  }, [config]);

  return [canvasRef, game];
};

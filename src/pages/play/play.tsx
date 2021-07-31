import PhaserGame from "views/phaser-game";
import create from "scenes/create";
import preload from "scenes/preload";
import update from "scenes/update";

export const Play = (): JSX.Element => {
  return (
    <PhaserGame
      config={{
        backgroundColor: "000000",
        height: 300,
        scene: { create: create, preload: preload, update: update },
        width: 400,
      }}
    />
  );
};

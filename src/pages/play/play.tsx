import PhaserGame from "views/phaser-game";

export const Play = (): JSX.Element => {
  return (
    <PhaserGame
      config={{ backgroundColor: "000000", height: 300, width: 400 }}
    />
  );
};

import { GameProvider } from "./phaser-game.context";
import { PhaserGameProps } from "./phaser-game.props";
import styles from "./phaser-game.module.css";
import usePhaser from "hooks/use-phaser";

export const PhaserGame = (props: PhaserGameProps): JSX.Element => {
  const [canvasRef, game] = usePhaser(props.config);
  return (
    <div className={styles.gameWrapper}>
      <GameProvider value={game}>{props.children}</GameProvider>
      <canvas ref={canvasRef} />
    </div>
  );
};

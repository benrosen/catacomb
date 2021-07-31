import Phaser from "phaser";
import { PropsWithChildren } from "react";

export type PhaserGameProps = PropsWithChildren<{
  config: Phaser.Types.Core.GameConfig;
}>;

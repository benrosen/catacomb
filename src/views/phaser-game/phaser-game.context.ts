import { createContext } from "react";

export const GameContext = createContext<Phaser.Game | null>(null);
export const GameProvider = GameContext.Provider;

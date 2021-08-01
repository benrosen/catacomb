import { ItemCode } from "enums/item-code";
import { MobCode } from "enums/mob-code";
import { TileCode } from "enums/tile-code";

export type Cell = {
  item?: ItemCode;
  mob?: MobCode;
  tile: TileCode;
};

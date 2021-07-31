# :european_castle: oubliette

Collaborative dungeon building rogue-like.

## Resources

```typescript

interface IMover {
  move: () => void;
}

interface IAttacker {
  attack: () => void;
}

interface IShieldUser {
  shield: () => void;
}

interface IConsumable {
  consume: () => string | JSON;
}

interface ICanDie {
  die: () => void;
}

interface IInteractable {
  event: Event
  callback: () => void;
}

enum PlayerStatCategory {
  HP,
  SHIELD,
  MOVE_SPEED
}

type PlayerBuff {
  targetStat: PlayerStat;
  modifier: number;
}

type PlayerDebuff {
  targetStat: PlayerStat;
  modifier: number;
}

type PlayerStat {
  category: string
  value: number
}

type Player extends ICanDie {

}

type Item extends ICanDie {

}



```
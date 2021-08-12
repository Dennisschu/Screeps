import { worker } from "cluster";
import uuid from "../core/uuid";

export default function (spawn: StructureSpawn): void {
  const cbase: BodyPartConstant[] = [WORK, WORK, WORK, CARRY, CARRY, MOVE];

  if (!spawn.room.find(FIND_MY_CREEPS).length) {
    const basic: BodyPartConstant[] = [WORK, CARRY, MOVE];
    spawn.spawnCreep(basic, `harvester-${uuid()}`, {
      memory: { role: "harvester", room: "", working: false }
    });
    return;
  }
  if (
    _(Game.creeps)
      .filter({ memory: { role: `harvester` } })
      .size() < 3
  ) {
    spawn.spawnCreep(cbase, `harvester-${uuid()}`, {
      memory: { role: "harvester", room: "", working: false }
    });
    return;
  } else if (
    _(Game.creeps)
      .filter({ memory: { role: `upgrader` } })
      .size() < 5
  ) {
    spawn.spawnCreep(cbase, `upgrader-${uuid()}`, {
      memory: { role: "upgrader", room: "", working: false }
    });
    return;
  } else if (
    _(Game.creeps)
      .filter({ memory: { role: `builder` } })
      .size() < 5
  ) {
    spawn.spawnCreep(cbase, `builder-${uuid()}`, {
      memory: { role: "builder", room: "", working: false }
    });
    return;
  }
}

import uuid from "../core/uuid";

export default function (spawn: StructureSpawn): void {
  const cbase: BodyPartConstant[] = [WORK, CARRY, MOVE];

  if (!spawn.room.find(FIND_MY_CREEPS).length) {
    spawn.spawnCreep(cbase, `harvester-${uuid()}`, {
      memory: { role: "harvester", room: "", working: false }
    });
    return;
  }
  if (
    _(Game.creeps)
      .filter({ memory: { role: `miner` } })
      .size() < 4
  ) {
    const basic: BodyPartConstant[] = [WORK, WORK, WORK, MOVE];
    spawn.spawnCreep(basic, `miner-${uuid()}`, {
      memory: { role: "miner", room: "", working: false }
    });
    return;
  } else if (
    _(Game.creeps)
      .filter({ memory: { role: `transporter` } })
      .size() < 6
  ) {
    const basic: BodyPartConstant[] = [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE];
    spawn.spawnCreep(basic, `transporter-${uuid()}`, {
      memory: { role: "transporter", room: "", working: false }
    });
    return;
  } else if (
    _(Game.creeps)
      .filter({ memory: { role: `upgrader` } })
      .size() < 6
  ) {
    const basic: BodyPartConstant[] = [CARRY, CARRY, CARRY, CARRY, MOVE, WORK, WORK];
    spawn.spawnCreep(basic, `upgrader-${uuid()}`, {
      memory: { role: "upgrader", room: "", working: false }
    });
    return;
  } else if (
    _(Game.creeps)
      .filter({ memory: { role: `builder` } })
      .size() < 8
  ) {
    spawn.spawnCreep(cbase, `builder-${uuid()}`, {
      memory: { role: "builder", room: "", working: false }
    });
    return;
  }
}

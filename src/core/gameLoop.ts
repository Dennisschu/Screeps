import harvester from "creeps/harvester";
import upgrader from "creeps/upgrader";
import uuid from "./uuid";

export default function (): void {
  console.log("1");
  Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], `upgrader-${uuid()}`, {
    memory: { role: "upgrader", room: "", working: false }
  });
  Game.spawns.Spawn1.spawnCreep([WORK, CARRY, MOVE], `harvester-${uuid()}`, {
    memory: { role: "harvester", room: "", working: false }
  });
  for (const creepname in Game.creeps) {
    const creep = Game.creeps[creepname];
    switch (creep.memory.role) {
      case "harvester":
        harvester.run(creep);
        break;
      case "upgrader":
        upgrader.run(creep);
        break;
      default:
        upgrader.run(creep);
        break;
    }
  }
}

import builder from "creeps/builder";
import harvester from "creeps/harvester";
import spawn from "creeps/spawn";
import upgrader from "creeps/upgrader";
// import uuid from "./uuid";

export default function (): void {
  console.log("1");
  spawn(Game.spawns.Spawn1);
  for (const creepname in Game.creeps) {
    const creep = Game.creeps[creepname];
    switch (creep.memory.role) {
      case "harvester":
        harvester.run(creep);
        break;
      case "upgrader":
        upgrader.run(creep);
        break;
      case "builder":
        builder.run(creep);
        break;
      default:
        upgrader.run(creep);
        break;
    }
  }
}

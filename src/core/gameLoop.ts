import builder from "creeps/builder";
import harvester from "creeps/harvester";
import miner from "creeps/miner";
import spawn from "creeps/spawn";
import transporter from "creeps/transporter";
import upgrader from "creeps/upgrader";
// import uuid from "./uuid";

export default function (): void {
  // console.log("1");
  spawn(Game.spawns.Spawn1);
  for (const creepname in Game.creeps) {
    const creep = Game.creeps[creepname];
    switch (creep.memory.role) {
      case "miner":
        miner.run(creep);
        break;
      case "builder":
        builder.run(creep);
        break;

      case "transporter":
        transporter.run(creep);
        break;
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
  for (const thisRoom in Game.rooms) {
    const room = Game.rooms[thisRoom];
    const resourceslist = room.find(FIND_SOURCES);
    room.memory = { Name: thisRoom, resources: resourceslist };
  }
}

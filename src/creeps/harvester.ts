/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import baseline from "./base";

export default class extends baseline {
  public constructor(Name: string, Role: string, Body: BodyPartConstant[], Memory: CreepMemory) {
    super(Name, Role, Body, Memory);
  }
  public static run(creep: Creep): void {
    this.CheckEnergy(creep);

    if (!creep.memory.working) {
      const target = this.GetSources(creep);
      if (target) {
        this.HarvesterNotWorking(creep, target);
      }
    } else {
      this.Work(creep);
    }
  }
  public static HarvesterNotWorking(creep: Creep, target: Source): void {
    if (creep.harvest(target) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }

  protected static Work(creep: Creep): void {
    const targets: any[] | undefined = creep.room.find<any>(FIND_STRUCTURES, {
      filter: struct => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const struct2 = struct as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (struct2.store) {
          if (struct2.store.getFreeCapacity([RESOURCE_ENERGY]) > 0) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return struct2;
          } else {
            return;
          }
        } else {
          return;
        }
      }
    });
    if (targets.length) {
      if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0]);
      }
    }
  }
}

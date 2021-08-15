/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import baseline from "./base";

export default class extends baseline {
  public constructor(Name: string, Role: string, Body: BodyPartConstant[], Memory: CreepMemory) {
    super(Name, Role, Body, Memory);
  }
  public static run(creep: Creep): void {
    this.CheckEnergy(creep);
    const target = creep.room.find(FIND_STRUCTURES, {
      filter: structure => {
        return structure.structureType === STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 100;
      }
    });

    if (!creep.memory.working) {
      if (target.length) {
        this.TransporterNotWorking(creep, target[0]);
      }
    } else {
      this.Work(creep);
    }
  }
  public static TransporterNotWorking(creep: Creep, target: AnyStructure): void {
    if (creep.withdraw(target, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
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
          if (struct2.store.getFreeCapacity([RESOURCE_ENERGY]) > 0 && struct2.structureType === STRUCTURE_EXTENSION) {
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
    if (!targets.length) {
      const targets2: any[] | undefined = creep.room.find<any>(FIND_STRUCTURES, {
        filter: struct => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const struct2 = struct as any;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          if (struct2.store) {
            if (struct2.store.getFreeCapacity([RESOURCE_ENERGY]) > 0 && struct2.structureType === STRUCTURE_SPAWN) {
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
      if (targets2.length) {
        if (creep.transfer(targets2[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets2[0]);
        }
      } else {
        const targets3: any[] | undefined = creep.room.find<any>(FIND_STRUCTURES, {
          filter: struct => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const struct2 = struct as any;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (struct2.store) {
              if (struct2.store.getFreeCapacity([RESOURCE_ENERGY]) > 0 && struct2.structureType === STRUCTURE_TOWER) {
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
        if (targets3.length) {
          if (creep.transfer(targets3[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
            creep.moveTo(targets3[0]);
          }
        } else {
          const targets4: any[] | undefined = creep.room.find<any>(FIND_STRUCTURES, {
            filter: struct => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              const struct2 = struct as any;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
              if (struct2.store) {
                if (
                  struct2.store.getFreeCapacity([RESOURCE_ENERGY]) > 0 &&
                  struct2.structureType === STRUCTURE_STORAGE
                ) {
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
          if (targets4.length) {
            if (creep.transfer(targets4[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
              creep.moveTo(targets4[0]);
            }
          }
        }
      }
    }
  }
}

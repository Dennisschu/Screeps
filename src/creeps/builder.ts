import base from "./base";

export default class extends base {
  public constructor(Name: string, Role: string, Body: BodyPartConstant[], Memory: CreepMemory) {
    super(Name, Role, Body, Memory);
  }
  protected static Work(creep: Creep): void {
    const structure: ConstructionSite | null = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    const repairables: AnyStructure[] | undefined = creep.room
      .find(FIND_STRUCTURES, {
        filter: c => c.hits < c.hitsMax
      })
      .sort((a, b) => a.hits - b.hits);
    if (structure) {
      if (creep.build(structure) === ERR_NOT_IN_RANGE) {
        creep.moveTo(structure);
      }
    } else if (repairables.length) {
      if (creep.repair(repairables[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(repairables[0]);
      }
    }
  }
}

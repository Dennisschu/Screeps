import base from "./base";

export default class extends base {
  public constructor(Name: string, Role: string, Body: BodyPartConstant[], Memory: CreepMemory) {
    super(Name, Role, Body, Memory);
  }
  protected static Work(creep: Creep): void {
    if (creep.room.controller) {
      if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    }
  }
}

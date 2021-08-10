import { filter } from "lodash";
import { basename } from "path";

export default class {
  private body_: BodyPartConstant[];
  private name_: string;
  private role_: string;
  private memory_: CreepMemory;

  public constructor(Name: string, Role: string, Body: BodyPartConstant[], Memory: CreepMemory) {
    this.name_ = Name;
    this.role_ = Role;
    this.body_ = Body;
    this.memory_ = Memory;
  }
  public get name(): string {
    return this.name_;
  }
  public set name(NewName: string) {
    this.name_ = NewName;
  }
  public get role(): string {
    return this.role_;
  }
  public set role(NewRole: string) {
    this.role_ = NewRole;
  }
  public get body(): BodyPartConstant[] {
    return this.body_;
  }
  public set body(NewBody: BodyPartConstant[]) {
    this.body_ = NewBody;
  }
  public get memory(): CreepMemory {
    return this.memory_;
  }
  public set memory(Memory: CreepMemory) {
    this.memory_ = Memory;
  }

  public static run(creep: Creep): void {
    this.CheckEnergy(creep);

    if (!creep.memory.working) {
      const target = this.GetSources(creep);
      if (target) {
        this.NotWorking(creep, target);
      }
    } else {
      this.Work(creep);
    }
  }
  protected static CheckEnergy(creep: Creep): void {
    if (creep.memory.working && creep.store[RESOURCE_ENERGY] === 0) {
      creep.memory.working = false;
    }
    if (!creep.memory.working && creep.store.getFreeCapacity() === 0) {
      creep.memory.working = true;
    }
  }
  protected static GetSources(creep: Creep): Source | null {
    return creep.pos.findClosestByPath(FIND_SOURCES);
  }
  protected static NotWorking(creep: Creep, target: Source): void {
    if (creep.harvest(target) === ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }
  protected static Work(creep: Creep): void {
    return;
  }
}

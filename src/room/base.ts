export default class {
  private name_: string;
  private resources_: any[];
  private memory_: RoomMemory;

  public constructor(Name: string, Resources: any[], Memory: RoomMemory) {
    this.name_ = Name;
    this.resources_ = Resources;
    this.memory_ = Memory;
  }
  public get name(): string {
    return this.name_;
  }
  public set name(NewName: string) {
    this.name_ = NewName;
  }
  public get resources(): any[] {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.resources_;
  }
  public set resources(NewResouces: any[]) {
    this.resources_ = NewResouces;
  }
  public get memory(): RoomMemory {
    return this.memory_;
  }
  public set memory(NewMemory: RoomMemory) {
    this.memory_ = NewMemory;
  }
}

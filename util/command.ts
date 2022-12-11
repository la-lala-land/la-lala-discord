import type { Interaction } from "harmony";

export interface CommandInfo {
  name: string;
  description: string;
}

export class Command implements CommandInfo {
  name: string;
  description: string;
  constructor(data: CommandInfo) {
    this.name = data.name;
    this.description = data.description;
  }
  execute(_i: Interaction): Promise<void | null> {
    return Promise.resolve(null);
  }
}

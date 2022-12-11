import { Client, ClientOptions, Interaction } from "harmony";

export class LalaClient extends Client {
  commands: Map<string, (i: Interaction) => void>;
  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Map();
  }
}

import { Client, ClientOptions, ApplicationCommandInteraction } from "harmony";

export class LalaClient extends Client {
  commands: Map<string, (i: ApplicationCommandInteraction) => Promise<unknown>>;
  constructor(options: ClientOptions) {
    super(options);
    this.commands = new Map();
  }
}

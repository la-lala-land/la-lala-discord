import {
  ApplicationCommandInteraction,
  InteractionResponseType,
} from "harmony";
import { generateName } from "lala";
import { Command } from "../util/command.ts";

export default class NameCommand extends Command {
  constructor() {
    super({
      name: "name",
      description: "Generate a random name.",
    });
  }
  execute(i: ApplicationCommandInteraction): Promise<unknown> {
    const length = i.data.options?.find(x => x.name === "length")?.value;
    if (!length) {
      return i.respond({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        content: generateName(),
      });
    }
    return i.respond({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      content: generateName(length),
    });
  }
}

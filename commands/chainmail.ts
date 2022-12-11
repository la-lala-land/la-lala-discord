import {
  ApplicationCommandInteraction,
  InteractionResponseType,
} from "harmony";
import { generateChainMail } from "lala";
import { Command } from "../util/command.ts";

export default class ChainmailCommand extends Command {
  constructor() {
    super({
      name: "chainmail",
      description: "Generate a random chain mail.",
    });
  }
  execute(i: ApplicationCommandInteraction): Promise<unknown> {
    const name = i.data.options?.find(x => x.name === "user")?.value;
    if (!name) {
      return i.respond({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        content: generateChainMail(),
      });
    }
    return i.respond({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      content: generateChainMail(i.resolved?.users[name].username),
    });
  }
}

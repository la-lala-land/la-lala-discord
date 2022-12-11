import {
  ApplicationCommandInteraction,
  InteractionResponseType,
} from "harmony";
import { generateCharacter } from "lala";
import { Command } from "../util/command.ts";

export default class CharacterCommand extends Command {
  constructor() {
    super({
      name: "character",
      description: "Generate a random fantasy character.",
    });
  }
  execute(i: ApplicationCommandInteraction): Promise<unknown> {
    return i.respond({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      content: generateCharacter(),
    });
  }
}

import { ApplicationCommandInteraction, InteractionResponseType } from "harmony";
import { Command } from "../util/command.ts";

export default class PingCommand extends Command {
  constructor() {
    super({
      name: "ping",
      description: "Get La Lala's ping to the Discord server.",
    });
  }
  async execute(i: ApplicationCommandInteraction): Promise<unknown> {
    await i.respond({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      content: "Pinging",
    });
    i.editResponse(
      `The round trip took \`${
        (Date.now()) - (i.timestamp.getTime())
      }ms\`.`,
    );
    return;
  }
}

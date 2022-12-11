import {
  ApplicationCommandInteraction,
  InteractionResponseType,
  InteractionType,
} from "harmony";
import type { LalaClient } from "../util/client.ts";

export default (
  lala: LalaClient,
  interaction: ApplicationCommandInteraction,
) => {
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    const command = lala.commands.get(interaction.name);
    if (command) command(interaction);
    else {interaction.respond({
        content:
          "Invalid command ig. This shouldn't happen so let the dev know.",
        ephemeral: true,
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      });}
  }
};

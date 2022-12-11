import {
  ClientEvents,
  ClientOptions,
  GatewayIntents,
  Interaction,
} from "harmony";

import * as events from "./events/mod.ts";
import * as commands from "./commands/mod.ts";
import { LalaClient } from "./util/client.ts";
import { Command } from "./util/command.ts";

const DISCORD_TOKEN = Deno.env.get("LALA_TOKEN");

const lala = new LalaClient({
  token: DISCORD_TOKEN,
  disableEnvToken: true,
  intents: [GatewayIntents.GUILDS],
  enableSlash: true,
});

Object.keys(events).forEach((eventName: string) => {
  lala.on(eventName as keyof ClientEvents, (...args) => {
    // @ts-ignore I need this
    events[eventName as keyof typeof events](lala, ...args);
  });
});

Object.values(commands as unknown as Record<string, new () => Command>).forEach((command: new () => Command) => {
  const cmd = new command();
  lala.commands.set(cmd.name, cmd.execute);
});
//lala.interactions.commands.create()

lala.connect();

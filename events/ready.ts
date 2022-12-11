import type { LalaClient } from "../util/client.ts";
import { generateStory } from "lala";

export default (lala: LalaClient) => {
  console.log("ready");
  lala.setPresence({
    status: "dnd",
    activity: {
      type: "WATCHING",
      name: generateStory(),
    },
  });
};

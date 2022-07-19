import { FunctionEvent } from "./types"
import { bot } from "./bot"

export const echoHandler = async function (event: FunctionEvent) {

  const message = JSON.parse(event.body as string);
  await bot.handleUpdate(message);

  return {
    statusCode: 200
  };
};
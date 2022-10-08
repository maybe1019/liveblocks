import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: 'pk_dev_9kBhAAOtYoGvC5yJTv-pSVW_'
});

export const {
  suspense: {
    RoomProvider,
    useOthers
  },
} = createRoomContext(client);

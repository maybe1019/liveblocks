import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey: 'pk_dev_2oNnzRUQH41cWXRBsu_pP76g',
  secretApiKey: "sk_dev_5p8j83FF4Zq67cypmRzGmxRP",
  authEndpoint: "/api/auth"
});

export const {
  suspense: {
    RoomProvider,
    useOthers
  },
} = createRoomContext(client);

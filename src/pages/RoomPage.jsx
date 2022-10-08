import React from "react";
import { useOthers } from "../liveblocks.config";

export default function RoomPage() {
  const others = useOthers();
  return <div>{others.count}</div>;
}

import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { avataaarsNeutral } from "@dicebear/collection";

function useGetUserAvatar(size, seed) {
  const userAvatar = useMemo(() => {
    return createAvatar(avataaarsNeutral, {
      seed: seed,
      size: size,
      radius: 50,
      backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "edb98a"],
      eyes: ["closed", "wink", "default", "squint", "side", "happy", "hearts"],
      mouth: ["twinkle","default", "smile"],
      randomizeIds: true
      // ... other options
    }).toDataUriSync();
  }, [seed]);
  return {userAvatar};
}

export default useGetUserAvatar;

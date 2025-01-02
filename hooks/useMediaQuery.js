import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query, serverFallback) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const mediaQueryList = matchMedia(query);
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => {
        mediaQueryList.removeEventListener("change", onStoreChange);
      };
    },
    [query]
  );

  return useSyncExternalStore(
    subscribe,
    () => matchMedia(query).matches,
    () => serverFallback
  );
}

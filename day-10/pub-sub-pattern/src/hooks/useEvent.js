// useEvent.js
import { useEffect } from "react";
import { eventBus } from "../lib/eventBus";

export function useEvent(eventName, handler) {
  useEffect(() => {
    // subscribe returns the unsubscribe function
    const unsubscribe = eventBus.subscribe(eventName, handler);

    return () => unsubscribe(); // cleanup on unmount
  }, [eventName, handler]);
}
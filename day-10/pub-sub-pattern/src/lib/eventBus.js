// eventBus.js
// -------------------------------
// A simple Pub-Sub implementation
// using a Map of event names → Set of handlers
// -------------------------------

import { crossTabChannel } from "./broadcast";

// Map that stores: eventName -> Set of subscriber functions
const listeners = new Map();

export const eventBus = {
    // ---- SUBSCRIBE to an event ----
    subscribe(eventName, handler) {
        // If the event is new, create its Set
        if (!listeners.has(eventName)) {
            listeners.set(eventName, new Set());
        }

        // Add handler to the event’s listener set
        listeners.get(eventName).add(handler);

        // Return an UNsubscribe function
        return () => {
            listeners.get(eventName)?.delete(handler);
        };
    },

    // ---- PUBLISH / EMIT an event ----
    publish(eventName, payload, { broadcast = true } = {}) {
        // If the event has subscribers, call them
        listeners.get(eventName)?.forEach((handler) => {
            handler(payload);
        });
        // Broadcast to other tabs (avoid infinite loops)
        if (broadcast) {
            crossTabChannel.postMessage({ eventName, payload });
        }
    },
};

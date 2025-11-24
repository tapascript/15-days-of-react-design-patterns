import { crossTabChannel } from "./broadcast";
import { eventBus } from "./eventBus";

crossTabChannel.onmessage = ({ data }) => {
    const { eventName, payload } = data;

    // Re-publish locally WITHOUT rebroadcasting
    eventBus.publish(eventName, payload, { broadcast: false });
};

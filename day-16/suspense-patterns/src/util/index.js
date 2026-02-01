const getTime = () => {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    // padStart is crucial for milliseconds to ensure consistent length
    const milliseconds = now.getMilliseconds().toString().padStart(3, "0");

    const timeWithMs = `${hours}:${minutes}:${seconds}.${milliseconds}`;

    return timeWithMs;
};

export { getTime };

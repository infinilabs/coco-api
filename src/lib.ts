const EVENT_TYPE_MESSAGE = 'message';

export function invoke<T = any>(messagePayload: {
    command: string;
    [key: string]: any;
}): Promise<T> {
    // TODO: add a timeout, we cannot wait for the response forever

    return new Promise((resolve, reject) => {
        const requestId = `${messagePayload.command}-${Date.now()}-${Math.random()}`;
        const messageToSend = { ...messagePayload, id: requestId };

        const messageHandler = (event: MessageEvent) => {
            const { id, error, payload } = event.data;
            if (id === requestId) {
                window.removeEventListener(EVENT_TYPE_MESSAGE, messageHandler);
                if (error) {
                    reject(new Error(error));
                } else {
                    resolve(payload);
                }
            }
        };

        window.addEventListener(EVENT_TYPE_MESSAGE, messageHandler);
        // TODO: Use tauri's real origin?
        //
        // dev: http://localhost:1420 
        // build: ???
        window.parent.postMessage(messageToSend, '*');
    });
}

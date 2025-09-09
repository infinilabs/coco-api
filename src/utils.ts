const EVENT_TYPE_MESSAGE = 'message';

/**
 * Helper function to send function call message to the parent window and wait
 * for the return value.
 *
 * @returns {Promise<any>}
 */
function requestFromIFrame(
    messagePayload: NonNullable<object & { command: string }>,
) {
    return new Promise((resolve, reject) => {
        const requestId = `${messagePayload.command}-${Date.now()}-${Math.random()}`;
        const messageToSend = { ...messagePayload, id: requestId };

        const messageHandler = (event) => {
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
        // TODO: do not use '*' as the origin, it is dangerous
        window.postMessage(messageToSend, '*');
    });
}

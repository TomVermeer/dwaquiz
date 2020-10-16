import { SERVER } from "./constants";
import { getDispatch } from "./store";
const WS_URL = `ws://${SERVER}/ws`;

let websocket = null;

const initializeWebSocket = (url, dispatch, additionalListeners = []) => {
    const ws = new WebSocket(url);
    
    ws.onmessage = ({data}) => {
        const message = JSON.parse(data);
        for (let listener of additionalListeners) {
            if(listener(message)) {
                return;
            }
        }
        dispatch(message);
    };

    return ws;
}

/**
 * Get's a websocket to the websocket server
 * All messages received by this websocket are dispatched to the connected redux store
 * No error handling and reconnection are implemented yet
 * @param additionalListeners {[function({type: string, payload: Object}): boolean]} Functions that get a chance to do something with a websocket message before it is dispatched
 * When one function returns true the other listerners are not executed and no dispatch is done.
 */
export const getWebsocket = (additionalListeners) => {
    if(websocket == null) {
        websocket = initializeWebSocket(WS_URL, getDispatch(), additionalListeners);
    }
    return websocket;
};
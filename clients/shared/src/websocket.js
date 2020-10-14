import { getDispatch } from "./store";
const WS_URL = 'ws://localhost:3000';

let websocket = null;

const initializeWebSocket = (url, dispatch) => {
    const ws = new WebSocket(url);
    
    ws.onmessage((data) => {
        const message = JSON.parse(data);
        dispatch(message);
    });

    return ws;
}

/**
 * Get's a websocket to the websocket server
 * All messages received by this websocket are dispatched to the connected redux store
 * No error handling and reconnection are implemented yet 
 */
export const getWebsocket = () => {
    if(websocket == null) {
        websocket = initializeWebSocket(WS_URL, getDispatch());
    }
    return websocket;
}
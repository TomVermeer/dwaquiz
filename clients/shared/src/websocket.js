import {SERVER} from "./constants";
import {getDispatch} from "./store";

const WS_URL = `ws://${SERVER}/ws`;

let websocket = null;

/**
 * When this additionalAction returns a falsy value:
 * Executes a GET request to the API with path specified in the handler, after the result is pared dispatches the parsed message
 * Otherwise:
 * The websocket event is dispatched
 * @throws {Error} when the GET request is not in the 2xx range
 * @param handlers {Object} an object serving as map whose keys are WsEvents and values are handlers
 * which have the type WebsocketHandler
 * @param message {Object} the ws event
 * @param dispatch {Function} function to dispatch the action with
 */
const executeHandler = (handlers, message, dispatch) => {
    const handler = handlers[message.type];
    handler.execute(message, dispatch);
};

/**
 * @param wsUrl url to start websocket connection to
 * @param dispatch @see{executeHandler}
 * @param handlers @see{executeHandler} for details about the handlers parameter
 * @return {WebSocket}
 */
const initializeWebSocket = (wsUrl, dispatch, handlers) => {
    const ws = new WebSocket(wsUrl);

    changeHandlers(ws, handlers, dispatch);

    ws.onclose = () => {
        websocket = null;
    };

    return ws;
};

const changeHandlers = (ws, handlers, dispatch) => {
    ws.onmessage = ({data}) => {
        const message = JSON.parse(data);
        if (handlers[message.type]) {
            executeHandler(handlers, message, dispatch);
        } else {
            throw new Error(`No websocket event handler was installed for type: ${message.type}`);
        }
    };
};

/**
 * Get's a websocket to the websocket server
 * All messages received by this websocket are dispatched to the connected redux store
 * No error handling and reconnection are implemented yet
 */
export const getWebsocket = (handlers) => {
    const dispatch = getDispatch();
    if (websocket == null) {
        websocket = initializeWebSocket(WS_URL, dispatch, handlers);
    } else {
        changeHandlers(websocket, handlers, dispatch);
    }
    return websocket;
};
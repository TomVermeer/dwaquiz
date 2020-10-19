import {getAndParse} from "./fetchHelpers";

export class WebsocketHandler {
    constructor(path, actionCreator, additionalAction) {
        this._path = path;
        this._additionalAction = additionalAction;
        this._actionCreator = actionCreator;
    }

    execute = (message, dispatch) => {
        if (!this._additionalAction || !this._additionalAction(message)) {
            getAndParse(this._path)
                .then(responseData => {
                    dispatch(this._actionCreator(responseData));
                });
        } else {
            dispatch(message);
        }
    };
}

const wrapActionWithReturn = (action, returnValue) => {
    return (message) => {
        action && action(message);
        return returnValue;
    }
};

/**
 * Wraps websocket handler for fetching,
 * additional action does not need to think about its return value
 */
export class WebsocketFetchHandler {
    constructor(path, actionCreator, additionalAction) {
        this._handler = new WebsocketHandler(
            path,
            actionCreator,
            wrapActionWithReturn(additionalAction, false)
        )
    }

    execute = this._handler.execute;
}

/**
 * Wraps WebsocketHandler for doing actions without a fetch, such as client side routing
 * additionalAction does not need to think about its return value
 */
export class WebsocketActionHandler {
    constructor(additionalAction) {
        this._handler = new WebsocketHandler(
            null,
            null,
            wrapActionWithReturn(additionalAction, true)
        )
    }

    execute = this._handler.execute;
}
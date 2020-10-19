import {WebsocketActionHandler, WebsocketFetchHandler} from "./WebsocketHandler";

class WebsocketHandlerBuilder {
    constructor(chain, event) {
        this._chain = chain;
        this._event = event;
    }

    fetch = (url, actionCreator, additionalAction) =>
        this._chain.addHandler(
            this._event,
            new WebsocketFetchHandler(url, actionCreator, additionalAction)
        );

    doAction = (additionalAction) =>
        this._chain.addHandler(
            this._event,
            new WebsocketActionHandler(additionalAction)
        );
}

export class WebsocketHandlersBuilder {
    constructor() {
        this._handlers = {};
    }

    /**
     * Start buidling an handler for the specified event
     * @param wsEvent
     * @return {WebsocketHandlerBuilder}
     */
    on = (wsEvent) => new WebsocketHandlerBuilder(this, wsEvent);

    /**
     * Adds a handler to the map
     * @param wsEvent event to listen for
     * @param handler {Object} handler for the event which implement {execute: function({type: string}, function(object))}
     * @return {WebsocketHandlersBuilder} to continue building with
     */
    addHandler = (wsEvent, handler) => {
        this._handlers[wsEvent] = handler;
        return this;
    };

    build = () => {
        return this._handlers;
    };
}


export class WebsocketHandlersBuilder {
    constructor() {
        this._handlers = {};
    }

    /**
     * Adds a handler to the map
     * @param wsEvent event to listen for
     * @param handler {Object} handler for the event which implement {execute: function({type: string}, function(object))}
     * @return {WebsocketHandlersBuilder} to continue building with
     */
    addHandler(wsEvent, handler) {
        this._handlers[wsEvent] = handler;
        return this;
    }

    build() {
        return this._handlers;
    }
}
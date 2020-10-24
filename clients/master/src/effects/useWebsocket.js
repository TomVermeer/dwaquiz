import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";

export const useWebsocket = (quizPin) => {
    useEffect(() => {
        startWebsocket(quizPin);
    }, [quizPin]);
};
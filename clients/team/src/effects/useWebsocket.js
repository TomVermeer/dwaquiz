import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";
import {useHistory} from 'react-router-dom';

export const useWebsocket = (quizPin, teamName) => {
    const history = useHistory();
    useEffect(() => {
        startWebsocket(history, quizPin, teamName);
    }, [history, quizPin, teamName]);
};
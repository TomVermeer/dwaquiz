import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";
import {useHistory} from 'react-router-dom';

export const useWebsocket = (quizPin, teamName, roundNumber, questionNumber) => {
    const history = useHistory();
    useEffect(() => {
        startWebsocket(history, quizPin, teamName, roundNumber, questionNumber);
    }, [history, quizPin, teamName, roundNumber, questionNumber]);
};
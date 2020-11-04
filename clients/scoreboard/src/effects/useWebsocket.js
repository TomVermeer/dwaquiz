import {useEffect} from 'react';
import {startWebsocket} from "../webSocketHandlers";
import {useHistory} from 'react-router-dom';

export const useWebsocket = (quizPin, roundNumber, questionNumber) => {
    const history = useHistory();
    useEffect(() => {
        if (history && quizPin) {
            startWebsocket(quizPin, history, roundNumber, questionNumber);
        } else {
        }
    }, [history, quizPin, roundNumber, questionNumber]);
};
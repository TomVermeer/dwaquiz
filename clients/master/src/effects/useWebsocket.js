import {useEffect} from 'react';
import {startWebsocket} from "../websocketHandlers";
import {useParams} from 'react-router-dom';

export const useWebsocket = () => {
    const quizPin = Number(useParams().quizPin);
    useEffect(() => {
        startWebsocket(quizPin);
    }, [quizPin]);
};
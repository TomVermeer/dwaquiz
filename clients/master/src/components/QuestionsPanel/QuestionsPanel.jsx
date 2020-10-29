import React, {useEffect, useState} from 'react';
import './questions-panel.scss';
import {Panel} from "../Panel/Panel";
import {askQuestion, fetchSuggestedQuestions} from "../../reducers/rootActionCreators";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";
import {useHistory} from 'react-router-dom';

const QuestionsPanelRow = (props) => (
    <div className="questions-panel-row">
        <p className="category-column">{props.category}</p>
        <p className="question-column">{props.question}</p>
    </div>
);

const fetchAmount = 40;

export const QuestionsPanel = (props) => {
    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);
    const suggestedQuestions = useSelector(state => state.root.suggestedQuestions);
    const dispatch = useDispatch();
    const history = useHistory();

    const fetchQuestions = (quizPin, roundNumber, startIndex) =>
        dispatch(fetchSuggestedQuestions(quizPin, roundNumber, startIndex, fetchAmount));

    useEffect(() => {
        dispatch(fetchSuggestedQuestions(quizPin, roundNumber, 0, fetchAmount));
    }, [quizPin, roundNumber, dispatch]);

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const onSelectQuestion = (question) => {
        setSelectedQuestion(question);
    };

    const onLoadMoreQuestions = () => fetchQuestions(quizPin, roundNumber, suggestedQuestions.length);
    const onAskQuestion = () => dispatch(askQuestion(quizPin, roundNumber, selectedQuestion, history));

    return (
        <div className="question-panel">
            <Panel
                onClick={onSelectQuestion}
                selected={selectedQuestion}
                header={<QuestionsPanelRow
                    category="Categorie"
                    question="Vraag"/>}
                rows={suggestedQuestions.map(x =>
                    <QuestionsPanelRow
                        key={x._id}
                        category={x.category}
                        question={x.question}
                        />)}
            >
                <div className="align-right">
                        <Button variant="secondary" className="margin-right" onClick={onLoadMoreQuestions}>Laad meer vragen</Button>
                        <Button variant="primary" disabled={selectedQuestion == null} onClick={onAskQuestion}>Stel vraag</Button>
                </div>
            </Panel>
        </div>
    );
};
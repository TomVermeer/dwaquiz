import React, {useEffect, useState} from 'react';
import './questions-panel.scss';
import {Panel} from "../Panel/Panel";
import {fetchSuggestedQuestions} from "../../reducers/rootActionCreators";
import {useDispatch, useSelector} from "react-redux";
import {Button} from "react-bootstrap";

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

    const fetchQuestions = (quizPin, roundNumber, startIndex) =>
        dispatch(fetchSuggestedQuestions(quizPin, roundNumber, startIndex, fetchAmount));

    useEffect(() => {
        fetchQuestions(quizPin, roundNumber, 0)
    }, [quizPin, roundNumber]);

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const onSelectQuestion = (question) => {
        setSelectedQuestion(question.key);
    };

    const onLoadMoreQuestions = () => {
        fetchQuestions(quizPin, roundNumber, suggestedQuestions.length);
    };

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
                        key={x.question}
                        category={x.category}
                        question={x.question}
                        />)}
            >
                <div className="align-right">
                        <Button variant="secondary" className="load-more" onClick={onLoadMoreQuestions}>Laad meer vragen</Button>
                        <Button variant="primary" disabled={selectedQuestion == null}>Stel vraag</Button>
                </div>
            </Panel>
        </div>
    );
};
import React, {useEffect} from 'react';
import './questions-panel.scss';
import {Panel} from "../Panel/Panel";
import {fetchSuggestedQuestions} from "../../reducers/rootActionCreators";
import {useDispatch, useSelector} from "react-redux";

const QuestionsPanelRow = (props) => (
  <div className="questions-panel-row">
      <p className="category-column">{props.category}</p>
      <p className="question-column">{props.question}</p>
  </div>
);

export const QuestionsPanel = (props) => {
    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);
    const suggestedQuestions = useSelector(state => state.root.suggestedQuestions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSuggestedQuestions(quizPin, roundNumber, 0, 20));
    }, [quizPin, roundNumber, dispatch]);

    return (
        <div className="question-panel">
            <Panel
                header={<QuestionsPanelRow
                    category="Categorie"
                    question="Vraag"/>}
                rows={suggestedQuestions.map(x =>
                    <QuestionsPanelRow
                        key={x.question}
                        category={x.category}
                        question={x.question}
                    />)}>
            </Panel>
        </div>
    );
};
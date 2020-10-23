import React, {useEffect} from 'react';
import './questions.scss';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSuggestedQuestions} from "../../../reducers/rootActionCreators";
import {useTitle} from "../../../effects/useTitle";
import {Panel} from "../../../components/Panel/Panel";

export const Questions = (props) => {

    const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);
    const suggestedQuestions = useSelector(state => state.root.suggestedQuestions);
    const dispatch = useDispatch();

    useTitle('Kiez vraag');

    useEffect(() => {
        dispatch(fetchSuggestedQuestions(quizPin, roundNumber, 0, 20));
    }, [quizPin, roundNumber, dispatch]);

    return (
        <div className="question-panel">
            <Panel
                header={<div className="space-between"><div>Categorie</div><div>Vraag</div></div>}
                rows={suggestedQuestions.map(x =>
                    <div className="space-between">
                        <div>{x.category}</div>
                        <div>{x.question}</div>
                    </div>)}>
            </Panel>
        </div>
    );
};
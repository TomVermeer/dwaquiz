import React, {useEffect} from 'react';
import './questions.scss';
import {useSelector, useDispatch} from 'react-redux';
import {fetchSuggestedQuestions} from "../../reducers/rootActionCreators";
import {changeTitle} from "shared/reducers/sharedActionCreators";

export const Questions = (props) => {

  const {quizPin, roundNumber} = useSelector(state => state.shared.quizProgress);
  const suggestedQuestions = useSelector(state => state.root.suggestedQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeTitle('Kies Vraag'));
  }, []);

  useEffect(() => {
      dispatch(fetchSuggestedQuestions(quizPin, roundNumber, 0, 20));
  }, [quizPin, roundNumber]);

  return (
      <div>
          {suggestedQuestions.map(x => <p key={x.question}>{x.category + ' ' + x.question}</p>)}
      </div>
  );
};
import {useSelector} from 'react-redux';

export const useQuestionProgress = () => {
  const {quizPin, roundNumber, questionNumber} = useSelector(state => state.shared.quizProgress);
  const teamName = useSelector(state => state.root.teamName);
  return {quizPin, roundNumber, questionNumber, teamName};
};
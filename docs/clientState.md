# clientState

For guarding the state in our applications we will be using Redux, in the following chapters we will first describe te structre of our state and following that the reducers and their respective tasks.

## State overview

### Master app

```js
{
    state: {
        allCategories: [string],

        quizNight :
        {
            quizPin: number,
            askedQuestions: [string],
            teamApplications: [string],
            approvedTeams: [string]
        },
        round: {
            roundNumber:  number,
            categories: [map(string, [string])], // categoryName -> question suggestions in category.
            questNumber: number
        },
        currentQuestion: {
            category: string,
            question: string,
            correctAnswer: string,
            teamAnswers: map(number, {answer: string, isCorrect: boolean}) // teamIndex -> answer, iscorrect
        },
        score: {
            scorePerTeam: map(number, {roundPoints: number, correctQuestions: number}) // teamIndex -> roundpoints, correctquestions
        }

    }

}

```

___

## Reducers

In this section the different reducers and their responsibillities will be documented.

### quizNightreducer

### roundreducer

### questionReducer

___
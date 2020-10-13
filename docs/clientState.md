# clientState

For guarding the state in our applications we will be using Redux, in the following chapters we will first describe te structre of our state and following that the reducers and their respective tasks.

# State overview

### Master app

```js
{
    state: {
        allCategories: [string],
        scorePerTeam: map(number, {roundPoints: number, correctQuestions: number}), // teamIndex -> roundpoints, correctquestions
        quizNight :
        {
            quizPin: number,
            askedQuestions: [string],
            teamApplications: [string],
            approvedTeams: [string]
        },
        chosenCategories: [map(string, [string])], // categoryName -> question suggestions in category.
        currentQuestion: {
            category: string,
            question: string,
            correctAnswer: string,
            teamAnswers: map(number, {answer: string, isCorrect: boolean}) // teamIndex -> answer, iscorrect
        },
        quizInfo: {
            quizPin: number,
            roundNumber: number,
            questionNumber: number,
        }
    }
}

```

### scoreboard

```js
{
    state: {
        quizInfo: {
            quizPin: number,
            roundNumber: number,
            questionNumber: number,
        },
        currentQuestion: string,
        answeredTeams: [strings],
        teamAnswers: map(string, string), // teamname -> answer
        scorePerTeam: map(number, {roundPoints: number, correctQuestions: number})
    }
}
```

### team app

```js
{
    state: {
        quizInfo: {
            quizPin: number,
            roundNumber: number,
            questionNumber: number,
        },
        teamname: string,
        approved: boolean,
        currentQuestion: string,
        answer: string,
        placing: {
            correctQuestions: number,
            roundPoints: number,
            placement: number
        }
    }
}

```

**Waar een map staat wordt een object van key-value pairs bedoeld, geen es6 map.*

---

# Reducers

In this section the different reducers and their responsibillities will be documented.

## Master app

### quizNightreducer

### roundreducer

### questionReducer

## scoreboard

## teamapp

## shared

---

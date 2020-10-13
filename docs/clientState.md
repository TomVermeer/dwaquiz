# clientState

For guarding the state in our applications we will be using Redux, in the following chapters we will first describe te structre of our state and following that the reducers and their respective tasks.

# State overview

### Master app

```js
{
    state: {
        allCategories: [string],
        chosenCategories: [numbers], // references index of allCategories,
        categoryValidationFailed: boolean,
        suggestedQuestions: [{category: number, question: string,}], // category references index of allCategories
        scorePerTeam: map(number, {roundPoints: number, correctQuestions: number}), // teamIndex ->; roundpoints, correctquestions
        quizNight :
        {
            quizPin: number,
            askedQuestions: [string],
            teamApplications: [string],
            approvedTeams: [string]
        },
        currentQuestion: {
            isOpen: boolean,
            category: string,
            question: string,
            correctAnswer: string,
            teamAnswers: map(number, {answer: string, isCorrect: boolean}) // teamIndex -> answer, iscorrect
        },
        quizProgress: {
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
        quizProgress: {
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

        quizProgress: {
            quizPin: number,
            roundNumber: number,
            questionNumber: number,
        },
        teamname: string,
        approved: boolean,
        currentQuestion: string,
        answer: string,
        isFirstAnswer: boolean,
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

In this section the different reducers and which actions they handle are documented.

## Master app

### root reducer
**@actions:**
        - ON_CATEGORY_ADD &rarr; add category to chosen categories.
        - ON_CATEGORY_REMOVE &rarr; remove category from chosen categories.
        - ON_QUESTIONS_RECEIVE &rarr; save fetched question suggestions
        - ON_QUIZ_NIGHT_RESULT &rarr; show Team scores.
      



### quizNight reducer

**@actions:**
    - ON_OPEN_QUIZ_NIGHT &rarr; create quizNightPin 
    - ON_TEAM_APPLY &rarr; create team application
    - ON_TEAM_APPROVE &rarr; approve team, remove team appliction create team
    - ON_TEAM_REJECT &rarr; reject team, remove team application.
    - ON_CLOSE_QUIZ_NIGHT &rarr; destroy quiz_night

### currentQuestion reducer

**@actions:**
    - ON_OPEN_QUESTION &rarr; enable close question button, set isOpen value to true & send event.
    - ON_ANSWER &rarr; create teamAnswer row.
    - ON_ANSWER_APPROVE &rarr; set teamAnswer row isCorrect value to true.
    - ON_ANSWER_REJECT &rarr; set teamAnswer row isCorrect value to false.
    - ON_CLOSE_QUESTION &rarr; disable close question button & send event set isOpen value to false.
    - ON_NEXT_QUESTION  &rarr; update current question.



---

## scoreboard

### scoreBoard reducer

**@actions:**
    - ON_QUIZ_NIGHT_START &rarr; show initial scoreboard.
    - ON_NEXT_QUESTION &rarr; show new question.
    - ON_TEAM_ANSWER &rarr; shows that a team has answered.
    - ON_ANSWERS_REVEAL &rarr; show what each team answered. 
    - ON_SCORE &rarr; reveal current score.

---

## teamapp

### root reducer

**@actions:**
    - ON_TEAM_APPLY &rarr; send team application, save teamName & quizPin;
    - ON_NEXT_QUESTION &rarr; Show Question and input field.
    - ON_ANSWER_SUBMIT &rarr; -> send answer, trigger isFirstAnswer.
    - ON_QUESTION_CLOSED &rarr; - disable input field and button.

### placing reducer

**@actions:** 
    - ON_QUIZ_SCORE &rarr; show own score
    - ON_QUIZ_NIGHT_END &rarr; cleanup state and return to home screen.

---

## shared

### quizProgress reducer

**@actions:**
    - ON_NEXT_QUESTION &rarr; up current question number.
    - ON_NEXT_ROUND &rarr; up current round number. 

### teamScore reducer

**@actions:**
    - ON_SCORE &rarr; create team-scores

---

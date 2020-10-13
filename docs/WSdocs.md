
# WS

All websocket communications must have a messageType and payload.
All messagetypes are based on events/actions that occur within the different applications.

## messageType onTeamApply

**@payload:**

```js
{
    teamName: "de billy butchers"
}
```

___

## messageType: onAnswer

**@payload:**

```js
{
    teamName: "de billy Butchers",
    answer: "answer to silly question"
}
```

___

## messageType: onQuestion

**@payload:**

```js
{
    category: "sport",
    question: "Interesting question about sport.",
    questionNumber: 1,
    roundNumber: 1
}
```

___

## messageType: onQuestionClose

**@payload:**

```js
 [
    {
        teamName:"de billy butchers",
        answer: "parijs",
        isCorrect: true
    },
    {
        teamName:"super-coole-teamnaam",
        answer: "bordaux",
        isCorrect: false
    }
]
```

___

## messageType: onRoundEnd

**@payload:**

```js

[
    {
        teamName: "de billy butchers",
        correctQuestions: 1,
        roundPoints: 4
    },
    {
        teamName: "super-coole-teamnaam".
        correctQuestions: 0,
        roundPoints: 0
    }
]

```

___

## messageType: onQuizNightEnd

**@payload:**

```js
[
    {
        teamName: "de billy butchers",
        correctQuestions: 1,
        roundPoints: 4
    },
    {
        teamName: "super-coole-teamnaam".
        correctQuestions: 0,
        roundPoints: 0
    }
]
```

___

## messageType: onTeamApprovel

**@description:** Returns true or false depending on if team is approved or not.
**@payload:**

```js
{
    approved: true
}
```

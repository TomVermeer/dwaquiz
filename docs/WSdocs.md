


#WS
All websocket communications must have a messageType and payload.


#Quizmaster

##onTeamApply:



#Scoreboard


##messageType: onAnswer
**@payload:**
```js
{
    teamName: "super-coole-team-naam",
    answer: "answer 1"
}
```
___

##messageType: onQuestion
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

##messageType: onQuestionClose
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

##messageType: onRoundEnd
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

##messageType: onQuizNightEnd
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

##messageType: 
**@payload:**
```js
{

}
```
___

##messageType: 
**@payload:**
```js
{

}
```


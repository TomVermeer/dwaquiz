#REST-API routes

#Master routes

##/quiz-nights
**@method:** POST
**@body:**
none

####@response:
#####200:

```js
{
  quizPin: 103441;
}
```
___

##/quiz-nights/:quizPin
**@method:** DELETE
**@body:** *None* 

####@response:
#####200:
**@body:** *none*
#####404:
**@description:** when quizPin does not exist.
**@body:**
```js
{
    error: "Quiz-night does not exist"
}
```
___

##/quiz-nights/:quizPin
**@method:** PATCH
**@body:**

```js
{
  active: true;
}
```

####@response
#####200:
**@body:** _none_
#####404:
**@description:** When quizPin does not exist.
**@body** _none_

___


##/quiz-nights/:quizPin/teams/
**@method:** POST
**@body:**

```js
{
  teamName: "super-cool-team";
}
```

####@response:
#####200:

**@body:** _none_

#####409:
**@description:** When teamName already exists in quiz.

#####404:
**@description:** When quizPin does not exist.

##/quiz-nights/:quizPin/team-applications/:teamName
**@method:** DELETE

####@response:
#####200:
**@body:** _none_
___

##/categories
**@method:** GET

####@response:
#####200:
**@body:**

```js
 [
        "sport", 
        "kunst" 
 ]
```
___

##/quiz-nights/:quizPin/round
**@method:** POST
**@body**
```js
[
    "sport",
    "kunst",
    "topografie"
]
```

####@response:
#####200:
**@description:** server bepaalt aan de hand van hoogste roundNumber wat het nieuwe roundNumber wordt.
**@body:** 
```js
{
    roundNumber: 1,
    possibleRoundQuestions:
        [
            {
                categoryName: "kunst"
                questions: ["vraag1","vraag2"]
            },
            {
                categoryName: "sport"
                questions: ["vraag1","vraag2"]
            },
            {
                categoryName: "topografie"
                questions: ["vraag1","vraag2"]
            }
        ]
}
```
#####400:
**@description:** When less or more than 3 categories are posted.
**@body:**
```js
{
    error: "A round must have exactly 3 categories."
}
```

#####404:
**@description:** when quizPin does not exist.
___

##/quiz-nights/:quizPin/rounds/:round/?:offset&:limit
**@method:** GET
**@body:** 
```js
[
    "sport",
    "kunst",
    "topografie"
]
```
#####200:
**@body:** 
```js
[
    {
        categoryName: "kunst"
        questions: ["vraag1","vraag2"]
    },
    {
        categoryName: "sport"
        questions: ["vraag1","vraag2"]
    },
    {
        categoryName: "topografie"
        questions: ["vraag1","vraag2"]
    }
]
```
#####400:
**@description:** When less or more than 3 categories are posted.
**@body:**
```js
{
    error: "A round must have exactly 3 categories."
}
```
___
##/quiz-nights/:quizPin/rounds/:round/questionings
**@method:** POST
**@body:**
```js
{
    question: "vraag1"
}
```
####@response:
#####@200:
**@body:**
```js
{
    answer: "antwoord voor vraag 1"
}
```
___
##/quiz-nights/:quizPin/rounds/:round/questionings/:question/grade
**@method:** POST
**@description:** if last question in round, score is also calculated and saved.
**@body:**
```js
[
    {
        teamName: "super-cool-team",
        grade: true
    }, 
    {
        teamName: "de billy butchers",
        grade: false
    }
]
```
####@response:

#####200:
**@body:** *None.* 

**@TODO:** Error situaties
___
##/quiz-nights/:quizPin/rounds/:round/questionings/:question
**@method** PATCH
**@body:** 
```js
{
    active: true
}
```
####@response:
#####200:
**@body:** *None*
#####404: 
**@description:** When question is not found.
**@body:** 
```js
{
    error: "Question not found"
}
```
___

#Scoreboard Routes

##scoreboards/:quizPin
**@method:** POST
**@Description:** Post quizPin to server to prepare Session for websocket connection.
**@body:** *None*

####@response:
#####200:
**@body:** *None* 

#####404:
**@description:** when quizpin does not exist.
**@body:**
```js
{
    error: "No quiz-night with this pin was found." 
}
```
___

##/
**@method:**
**@body:**
```js

```
####@response:
___

##/
**@method:**
**@body:**
```js

```
####@response:
___

##/
**@method:**
**@body:**
```js

```
####@response:
___

##/
**@method:**
**@body:**
```js

```
####@response:



#REST-API routes

#Master routes

##/quiz-night
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
##/quiz/:quizPin/teams/
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

##/quiz/:quizPin/team-applications/:teamName
**@method:** DELETE

####@response:
#####200:
**@body:** _none_
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
##/quiz-nights/:quizPin/rounds/:round/questions
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





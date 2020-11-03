# REST-API routes

## Introduction

This markdown file is an overview of all available REST-routes for the Quizzer api v1. All routes assume a root of `/api/v1/`.

Each route has the following information:

- Route
- Method
- Body
- Optionally a description
- Possible responses
  - Status code
    - In case of an error, what caused the error
  - Body

## Overview

The following diagram shows all available routes with their supported methods.

```puml
@startmindmap
* /
 * /quiz-pins
  * /:quizPin
   *_ GET
 * /categories
  *_ GET
 * /questions
  * /:id
   *_ GET
 * /quiz-nights
  *_ POST
  * /:quizPin
   *_ PATCH
   * /scores
    *_ GET
    * /:teamName
     *_ GET
   * /team-applications
    *_ POST
    *_ GET
    * /:teamName
     *_ DELETE
   * /teams
    *_ GET
    *_ POST
   * /rounds
    * /questionings
     *_ POST
     * /:questionNumber
      *_ PATCH
      *_ GET
      * /:teamName
       *_ GET
      * /answers
       *_ GET
       * /grades
        *_ POST
       * /:teamName
        *_ PUT
    * /suggested-questions
     *_ GET
@endmindmap
```

## Route descriptions

### /quiz-pins/:quizPin

#### GET

_Description:_
Can be used to check whether or not a quizpin exists

##### Responses

###### 200

when the quizpin exists
**Body:** _none_
###### 404

when the quizpin does not exist
**Body:** _none_

___

### /categories

#### GET

_Description:_
Gets all available categories

##### Responses

###### 200

**Body**
```js
[
    "Algemeen",
    "Sport",
    "Wetenschap & techniek"
]
```

___

### /questions/:id

#### GET

_Description:_
Gets the question with the given id

##### Responses

###### 200

When the id exists
**Body**
```js
{
    "_id": "5f9a7cd5009c3613b49bcc14",
    "question": "Hoe wordt een middagdutje zoals dit bijvoorbeeld in Spanje wordt gehouden genoemd?",
    "answer": "Een siësta",
    "category": "Algemeen",
    "orderNumber": 0.07511334721142338,
}
```

###### 404

When the id does not exist

___

### /quiz-nights

#### POST

_Description:_
Creates an empty quiz-night en returns the generated quizpin. The quizpin is always at least 6 digits.

##### Responses

###### 200

**Body:**
```js
{
    "quizPin": 661178
}
```

___

### /quiz-nights/:quizPin

#### PATCH

**Body:**

_Description:_
To end a quiz-night and notify the participating teams and scoreboards

```js
{
    isActive: false
}
```

_Description:_
To close the application period for a quiz-night

```js
{
    isOpenForApplication: false
}
```

##### Responses

###### 200

###### 404

When the quizpin does not exist

____

### /quiz-nights/:quizPin/scores

#### GET

_Description:_
Gets the current scores of al teams in a quiz night

##### Responses

##### 200

**Body:**

```js
[
    {
        "roundPoints": 0,
        "numberOfCorrectQuestions": 0,
        "teamName": "Erik"
    },
    {
        "roundPoints": 0,
        "numberOfCorrectQuestions": 0,
        "teamName": "Tom"
    }
]
```

##### 404

When the quizpin does not exist

___

### /quiz-nights/:quizPin/scores/:teamName

#### GET

_Description:_
Gets the score and placing for a specific team 

#### Responses

##### 200 

**Body:**

```js
{
    "teamName": "Erik",
    "roundPoints": 0,
    "numberOfCorrectQuestions": 0,
    "placing": 2
}
```

##### 404

When the quizpin or teamname does not exist

___

### /quiz-nights/:quizPin/team-applications

#### POST

_Description:_
Adds a team to the team applications and notifies the quizmaster there has been a change in team applications.

**Body:**
```js
{
    teamName: "Erik"
}
```

##### Responses

###### 200

###### 4040

When the quizpin does not exist
___

#### GET

_Description:_
Returns a list of all teams that requested to join the quiznight and have not been rejected

#### Responses

##### 200

**Body:**

```js
[
    "Erik",
    "Tom"
]
```

##### 404

When the quizpin does not exist

___

### quiz-nights/:quizPin/team-applications/:teamName

#### DELETE

_Description:_
Removes a team application and notifies the accociated socket of its rejection

##### Responses

###### 200

###### 404

When the quizpin or teamname does not exist

___

### /quiz-nigts/:quizPin/teams

#### GET

_Description:_
Gets the approved teams of a quiznight

##### Responses

###### 200

**Body:**

```js
[
    "Tom"
]
```

###### 404

When the quizpin does not exist
___

#### POST

_Description:_
Approves a given team and notifies the connected team and scoreboard(s)

**Body:**

```js
{
    teamName: "Tom"
}
```

##### Responses

###### 200

###### 404

When the quizpin does not exist
___


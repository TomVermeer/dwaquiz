# REST-API routes

# Introduction

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

# Overview

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

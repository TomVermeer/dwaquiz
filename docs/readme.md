# Quizzer

## Introduction

This documentation is written using Markdown and Draw.io.
To read this document as intented it should be read using [VS Code](https://code.visualstudio.com/) and the following extensions:

- [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/) to be able to read all headings and plant uml snippets. Some users may also need [graphviz](https://graphviz.gitlab.io/) which can be installed with `choco install graphviz` on windows.
- [vscode-drawio](https://marketplace.visualstudio.com/items?itemName=eightHundreds.vscode-drawio) to be able to read the drawio diagram

**Made by:** Erik Knaake & Tom Vermeer
___

## wireframes

Wireframes were made using draw.io and illustrate the different screens of our applications.
They also serve to identify routes,resources and events.

Components are only marked onces, once a component has been identified it cluters the wireframes when it is marked again. Due to an issue with layers not all marking is done in the same way, some components are colored and annotated with text, while some others have an extra dotted border around them.

Redux actions are annotated with `[ACTION]`, these actions are futher described in [client state](clientState.md).

[Wireframes](wireframes.drawio)
___

## Resources

Resources represent the data the application will me modifying and communicating with.
We have chosen to represent this in a domain model for readabillity.

concepts that are colored red are not used as resources withing the applications, they are shown to illustrate connection between the resources and the users.

[domainmodel](domain-model.drawio)
___

## Api-docs

[Api-docs](apiDocs.md)
___

## WS-docs

[Ws-docs](WSdocs.md)
___

## Mongoose-schema's

We have chosen to model 5 different schema's in for our application, altough we intend to only use 3 collections.
We decided to make the "teamSchema" and "roundSchema" schemes to make the schema;s more readable. These schema's however will not become their own collections but rather be embedded in the "quizNightSchema". Who chose to embed because the is not a compelling reason to link, we dont think that we need to access teams or questionings that much on their own and we can get away with a projection in the case we have to. We dont expect that 12 questions per round with not much more than 8 teams will hit the 16 MB limit with any reasonable amount of rounds.

The questionings schema is a separate collection so the fetching, answering and grading of a questioning will be easier.
Since this really is the core part of the application with probably the most updates we want this to be easy to read and write. Without risking inconsistent data.

questionSchema is a separate collection because it needs to be accessed by the quizmaster without the need of additional information about a quiznight.

```js

const questioningsSchema = new mongoose.schema({
    teamName: String,
    question: questionSchema,
    answer: String,
    isCorrect: Boolean,
    roundNumber: Number,
    questionNumber: Number,
    quizPin: Number
})

const teamSchema = new mongoose.schema({
    teamName: String,
    numberOfCorrectQuestions: Number,
    roundPoints: Number,
})

const roundSchema = new mongoose.schema({
    chosenCategories: [String],  
    roundNumber: Number,
    questionings: [questioningsSchema],
})

const quizNightSchema = new mongoose.Schema({
  _id: Number, // quizPin
  teams: [teamSchema],
  rounds: [roundSchema],
  isOpenForApplication: Boolean
});

const questionSchema = new mongoose.schema({
  question: String,
  category: String,
  answer: String,
  orderNumber: Number
});

```

___

## Client-State

[Client State](clientState.md)
___

## Express-structure

[Express Structure](expressStructure.md)

## General Overview

See [module structure](moduleStructure.md)

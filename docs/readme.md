# readme-Quizzer

##Introduction

this documentation is written using Markdown and Draw.io.
**made-by:** Erik Knaake & Tom Vermeer
___
##wireframes
Wireframes were made using draw.io and illustrate the different screens of our applications.
They also serve to identify routes,resources and events.

[Wireframes](wireframes.drawio)
___
##Resources
Resources represent the data the application will me modifying and communicating with.
We have chosen to represent this in a domain model for readabillity. 

concepts that are colored red are not used as resources withing the applications, they are shown to illustrate connection between the resources and the users.

[domainmodel](domain-model.drawio)
___
##Api-docs

[Api-docs](apiDocs.md)
___

##WS-docs


[Ws-docs](WSdocs.md)
___

##Mongoose-schema's
We have chosen to model 5 different schema's in for our application, altough we intend to only use 2 collections.
We decided to make the "questioningsSchema", "teamSchema" and "roundSchema" schemes to more easily handle our data in the frontend. These schema's however will not become their own collections but rather be embedded in the "quizNightSchema".

[mongoose schema's](mongooseSchema.PNG)
___
##Client-State
// TODO
___
##Express-structure
// TODO


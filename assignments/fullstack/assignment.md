# Fullstack EchoBot

We're all full-stack developers at Chatlayer, meaning we're proficient in both frontend and backend development.
This assignment will test your capabilities in creating a full-stack application from scratch.

## Assignment

The EchoBot is a tiny chatbot that repeats anything you say to it.

An example EchoBot is set up here: https://chatbox.staging.chatlayer.ai/5ef5aabd99110809d2374df3?language=en

### Backend

The backend is an API that contains the logic for the EchoBot. It allows one to send a request containing a message. The EchoBot will respond by echoing that message back as the response. 

Use a protocol of your choosing. We recommend creating a REST API but you may use Websockets, GraphQL, ... as well.

Write the backend in any language. Node.js (JavaScript) is preferred.

Even though it may be a tiny API, be sure to provide everything you would expect from a production-grade API.

### Frontend

Build a chat widget that will allow the user to send a message to the EchoBot's backend.

These are the minimum required components the frontend should consist:

- a **text input field** for users to enter their expression
- a **send button** allowing users to send the expression to the EchoBot
- a **list of messages**, printing historical messages from both the user and the EchoBot.

You may use a frontend library like React (JavaScript) to complete this part of the assignment, but it is not a necessity.

### Submitting

Make sure there are clear instructions on how to run your front- and backend by adding a README file.

# Interpolate Session Variables in Text Messages

## Intro

When a user talks to a chatbot, they might leave some interesting data like their name, age, birth place or favourite color.
This information can be stored in the chat **Session** - an object that represents the state of the chat conversation. Using the session, bot builders can direct the flow of the conversation, make dynamic API calls or even use those session variables inside the conversation.

A bot builder could use the variables stored in the session in the messages a bot sends, for example in the following Text Message:

![session variables](./variable.png)

Given a session object:

```json
{
  "firstname": "John"
}
```

The bot will fill in the variable in the text message, resulting in the message:

> Hi! I'm Choo Choo, but your name is way cooler, isn't it, John

If the variable does not exist within the session, the template will be replaced with an empty string.

## Assignment

Write a function `interpolate` that replaces the declared variables inside of a string, enclosed within a left and right delimiter, with their respective values from the session object.
The function recieves three variables:

- a string `value`, which is the value to be interpolated,
- a `session` object, the object to retrieve variables from for interpolation,
- an `options` object, that takes
  - `leftDelimiter`: the delimiter on the left side of the variable
  - `rightDelimiter`: the delimiter on the right side of the variable

It returns the interpolated string.

If you're using JavaScript, a template function is provided to you in the `src/interpolate.js` file. Tests are provided as well, you may test your interpolate function by running `npm test` inside this folder (make sure to run `npm install` first).

```js
const interpolate = (value, session = {}, options = {}) => {
  // TODO
};
```

Example output:

```js
interpolate(
  "Hi! I'm Choo Choo, but your name is way cooler, isn't it, {firstname}?",
  { firstname: 'John' },
  { leftDelimiter: '{', rightDelimiter: '}' }
);

// Result:  "Hi! I'm Choo Choo, but your name is way cooler, isn't it, John?"
```

The tests file (`src/interpolate.spec.js`) contains more examples of in- and outputs.

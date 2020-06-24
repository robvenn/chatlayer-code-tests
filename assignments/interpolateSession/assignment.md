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

Write a function `interpolate` that replaces the declared variables inside of a string, enclosed within a left delimiter '{' and a right delimiter '}', with their respective values from the session object.
The function recieves three variables:

- a string `value`, which is the value to be interpolated,
- a `session` object, the object to retrieve variables from for interpolation,
- an `options` object, that takes
  - `leftDelimiter`: the delimiter on the left side of the variable
  - `rightDelimiter`: the delimiter on the right side of the variable

It returns the interpolated string.

```js
const interpolate = (value, session = {}, options = {}) => {
  // TODO
};
```

Example output:

```js
interpolate(
  'Hi! I'm Choo Choo, but your name is way cooler, isn't it, {firstname}?',
  { firstname: 'John' },
  { leftDelimiter: '{', rightDelimiter: '}' }
)

--->  Hi! I'm Choo Choo, but your name is way cooler, isn't it, John?
```

```js
interpolate(
  'Hi there __{user.firstName}__, how is the weather in __{user.country}__?',
  { user: { firstName: 'Brecht', country: 'Belgium' } },
  { leftDelimiter: '__{', rightDelimiter: '}__' }
);

---> Hi there Brecht, how is the weather in Belgium?
```

```js
interpolate(
  'Hi there __{user.firstName}__.',
  {},
  { leftDelimiter: '__{', rightDelimiter: '}__' }
);

---> Hi there .
```

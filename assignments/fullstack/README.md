# Fullstack EchoBot

This is my solution for the full stack assignment.
The front- and back-end are separate NPM packages that are configured as NPM workspaces.

Instructions:
* run `npm install --workspaces` (tested with Node 16.15.0) which should install node modules of both packages
* it's probably best to open 2 separate windows, navigate to the frontend and backend folders
* run `npm start` in both shell windows

You should be able to see the front-end in the browser running on localhost:4000, the back-end is running on localhost:3000 and has 2 HTTP endpoints
* `GET /api/messages` to receive a list of messages
* `POST /api/messages`to add a new message `{ message: string }`


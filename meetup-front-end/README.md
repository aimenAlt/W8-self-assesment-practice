# Meetup Registration - Front End
Build a the front-end of a single page app that takes that allows a meetup organizer to register attendees for a JS meetup and keep track of who is already registered.

**Note: This prompt is front end only!** The back end is provided for you by json-server. You don't need to understand much about json-server to complete this prompt, so don't waste time! 

## Setup

- [ ] `npm install`
- [ ] `npm run react-dev` to run the pre-configured webpack
- [ ] `npm start` to run the json-server

## Requirements

Using React, build your client app inside the src folder provided. A static HTML version of this app exists inside of `public/index.html`, which you will replace with a React app. 

**Note: Your entire application should not be contained in one component - break up your application into reasonable components.**

The homepage of your application should have:

- A `Current Attendees` list, which should include first + last names of attendes, grouped by experience level (beginner, intermediate, expert)

- A `Register Attendee` form, which should include fields for
    - First name
    - Last name
    - Email address
    - Shirt Size (one of XS, S, M, L, XL, XXL)
    - Experience Level (one of beginner, intermediate, expert)
- A `Register` button, which when clicked, should:
    - Submit the attendee information to the server
    - Update the Current Attendees list (after the information has been accepted by the server)



## Advanced Content

Allow the user to click on an attendee in the `Current Attendees` list to edit the attendee's information.


## Available API Routes

For more, check out the json-server documentation!

| Endpoint          | Type   | Operation                 |
|-------------------|--------|---------------------------|
| `/attendees`      | GET    | Get all attendees         |
| `/attendees`      | POST   | Add an attendee           |

Note: For the POST route, you'll need to include an appropriate header to let json-server know the format of the request body.

## Available Resources:

- [MDN](https://developer.mozilla.org/bm/docs/Web/JavaScript)
- [NPM](https://www.npmjs.com/)
- [React Documentation](https://reactjs.org/docs/hello-world.html)
- [json-server Documentation](https://www.npmjs.com/package/json-server)

# Building a Todo App with CRA, Mirage JS, Formik, and TypeScript

Started: Wed 26 May 2021 11:24:17

## Purpose

Having just completed a contract, I wanted to build a simple to consolidate what I learned. I wanted to concentrate more
on how I was building it and not what I was building.

## Users stories & experience

### General

As a user, I wanted mange my tasks so that I can keep on top of priorities and commitments

### Task creation and management

As a user, I want to create tasks so that I can track details and status over time

As a user, I want to capture the name, description, due date, category label, priority and completion status for a task

As a user, I want to update the name, description, due date, category, priority and completion status of tasks, so I can
manage priorities and commitments as they change over time

As a user, I want to make task as complete so that I know what tasks completed and which are outstanding

As a user, I want to be able to archive tasks, so they are out of sight but can be retrieved if needed in the future

As a user, I want to be able to delete tasks, so I can focus on tasks that matter to me

As a user, I want to notified of overdue tasks, so I can decide to re prioritise, complete or archive it

### Task list creation and management

As a user, I want to see all my tasks in a default view that can be sorted by priority and/or date

As a user, I want to see my most important tasks for the day ordered by priority as the default view when I load the app

As a user, I want to create categories (AKA lists) so that I can group tasks based on contexts meaningful to me

### Design

As a user, I want to see a list of task lists so that I can quickly navigate between them

As a user, I want to be able to show or hide my task lists to focus on the list I'm currently working in

As a user, I want search my tasks, so that I can manage tasks quickly

## Technologies:

- Node v16.2.0
- Yarn 1.22.5
- React.js using Create React App
- TypeScript
- Mirage JS and [Mirage GraphQL](https://github.com/miragejs/graphql)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- Jest and [React Testing Library](https://testing-library.com/)
- [React Router](https://reactrouter.com/)
- [React Query](https://react-query.tanstack.com/)
- [React error boundary](https://www.npmjs.com/package/react-error-boundary)
- [Styled Components](https://www.npmjs.com/package/react-error-boundary)
  )

## Installation

### Create React App (CRA)
Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

Using Yarn and TypeScript template 
`npx create-react-app my-app --template typescript`

I used [yarn](https://yarnpkg.com/), the default package manager for CRA. You optionally specify npm using the flag `--use-npm`

### Mirage JS and Mirage GraphQL
`yarn add --dev miragejs @miragejs/graphql`

### Formik & Yup

`yarn add formik`
`yarn add yup @types/yup`

### React Query

`yarn add react-query @types/react-query`

### React Router

`yarn add react-router-dom @types/react-router-dom`

### Others

`yarn add husky lint-staged prettier`
`yarn add serve`
`yarn add react-error-boundary`

### Jest and React Testing Library

The news is CRA has out of the box support for Jest and React Testing Library (RTL)

### Installing and using react-error-boundary

https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react

By now the dependencies in your package.json file should look something like this:

```json
"dependencies": {
"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",
"@types/jest": "^26.0.15",
"@types/node": "^12.0.0",
"@types/react": "^17.0.0",
"@types/react-dom": "^17.0.0",
"@types/react-query": "^1.2.9",
"@types/react-router-dom": "^5.1.7",
"@types/yup": "^0.29.11",
"formik": "^2.2.8",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-query": "^3.16.0",
"react-router-dom": "^5.2.0",
"react-scripts": "4.0.3",
"typescript": "^4.1.2",
"web-vitals": "^1.0.1",
"yup": "^0.32.9"
},
```

And your dev dependencies should include: 
```json
"devDependencies": {
    "@miragejs/graphql": "^0.1.11",
    "miragejs": "^0.1.41"
}
```


---

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you are not satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Axur Search

This is the frontend application for the Axur Search API, a simple web crawling service that navigates a [static website with the Linux manual pages](http://hiring.axreng.com/), built with React and Typescript. 

## Product Snapshots

<p float="left">
<img src="https://raw.githubusercontent.com/viQcinese/axur-front/develop/docs/layout-2.gif?raw=true" width="20%" />
<img src="https://raw.githubusercontent.com/viQcinese/axur-front/develop/docs/layout-1.gif?raw=true" width="20%" />
</p>

## React Ecosystem Technologies

- `styled-components` is used as a _css-in-js_ solution for UI implementation.
- `react-hook-form` to handle form submission with uncontrolled form components
- `react-testing-library` and `jest-dom` to handle component tests. 
- custom hooks to GET and POST remote data, with a crude implementation on top of `axios`, inspired by `react-query` and `apollo-client`.

## User Stories

- [x] User is able to dispatch a new search
- [x] User is able to see an error message for invalid search input
- [x] User is able to see the search history
- [x] User is able to clean search history
- [x] User is able to return to a previously dispatched search [no-cache]
- [x] Search history data persists when page reloads

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

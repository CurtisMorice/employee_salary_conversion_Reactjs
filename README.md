# Redux Employee Salary Conversion

Our employee salary calculator is still pretty small and might not need redux yet, but we know our app is going to grow and grow, so we're going to add redux before things get out of hand. Setting up Redux is time consuming, but it's worth it!

## Setup
1. Fork this repo
2. `npm install`
3. `npm start`

## Base Mode 

1. Get `redux` and `react-redux` installed
2. Set up your store, and `Provider`
3. Think about this goal:

Your assignment is to move the `employeeList` array, `addEmployee` function, and `deleteEmployee` function out of the `App.js` and into the reducers. Fire off those functions by dispatching the `'ADD_EMPLOYEE'` and `'DELETE_EMPLOYEE'` actions.

Let's add some Redux!



Things you should do:
[X] 1. Make a reducer to handle the state of the employee list 
[X] 2. `Connect` the components that need to communicate with redux, both dispatch and mapStateToProps
[] 3. Dispatch actions that trigger reducer functions
[] 4. Use the payload to alter state

## Hard Mode
1. Use `react-router-dom` to pull the form onto its own view. Submitting will still update the list found on the other view.

## Stretch Goals

Move your reducers
1. Create a `redux` folder inside of the `src` folder
2. Create a `reducers` folder inside your `redux` folder
3. Create an `employee.reducer.js` file inside of the `reducers` folder
4. Move your reducer into this file, and then export it. Import it where you were using it.

Move your actions
1. Create an `actions` folder inside your `redux` folder
2. Create an `employee.actions.js` file inside `actions` folder
3. Define your actions here and export them. You'll need to `export` multiple things! Look up named exports: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
4. Import the actions where you use them. Use them to call the reducers!

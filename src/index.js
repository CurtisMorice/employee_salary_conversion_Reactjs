import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const employeeList = (state= [], action) => {
    console.log('Employee list reducer', action)
    
if(action.type === 'ADD_EMPLOYEE'){
    
    return[...state, action.payload]

}else if(action.type === 'DELETE_EMPLOYEE'){
    const matchEmployee = employee => employee.idNumber !== action.payload.idNumber;
    //action.payload is the employeeToDELETE

    //this filter() iterates over a collection and returns a new collection 
    //where the condition above evaluates to true
    return state.filter(matchEmployee);

}
    return state;
}


const storeInstance = createStore(


    combineReducers({
        employeeList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

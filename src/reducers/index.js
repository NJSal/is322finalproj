import { combineReducers } from 'redux';

//import userChoiceReducer from './userChoiceReducer';
import errorReducer from './errorReducer';
import accountsReducer from './accountsReducer';

export default combineReducers( {

    //tasks: userChoiceReducer,
    accounts: accountsReducer,
    errors: errorReducer

});

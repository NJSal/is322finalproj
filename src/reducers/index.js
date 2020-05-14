import { combineReducers } from 'redux';

import userChoiceReducer from './userChoiceReducer';
import errorReducer from './errorReducer';

export default combineReducers( {

    tasks: userChoiceReducer,
    errors: errorReducer

});

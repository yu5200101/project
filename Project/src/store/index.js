import react from 'react';
import {createStore,applyMiddleware} from 'redux';
import reduxLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import reducer from './reducer/index';

const store=createStore(reducer,applyMiddleware(reduxPromise,reduxThunk,reduxLogger));
export default store;
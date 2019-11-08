import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counterReducer';

const RootReducer = combineReducers({ counterReducer });

const Store = createStore(RootReducer);

export { Store };

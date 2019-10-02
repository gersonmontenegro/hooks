import { createStore } from 'redux';
import CombineReducers from './../reducers';

const store = createStore(CombineReducers);

export default store;

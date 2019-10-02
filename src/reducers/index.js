import { combineReducers } from 'redux';
import {
    ADD_MEMO_COUNT,
    ADD_NO_MEMO_COUNT,
    ADD_REGULAR_COMPONENT_RENDER_COUNTER,
    ADD_MEMO_COMPONENT_RENDER_COUNTER,
    SET_FILTER,
    GET_DATA_WITH_FILTER,
    GET_ALL_DATA,
    SET_FILTER_REGULAR_REDUCER,
    GET_DATA_WITH_FILTER_REGULAR_REDUCER,
} from './../actions/types';
import data from './../features/providers/data';

const initialState = {
    noMemoCounter: 0,
    memoCounter: 0,
    regularComponentRenderCounter: 0,
    memoComponentRenderCounter: 0,
    listData: data,
    filter: '',
    filterRegularReducer: '',
    filterDataWithUseSelector: data,
    filterDataWithRegularReducer: data,
};

const countersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NO_MEMO_COUNT: {
            return {
                ...state,
                noMemoCounter: state.noMemoCounter + 1,
            };
        }
        case ADD_MEMO_COUNT: {
            return {
                ...state,
                memoCounter: state.memoCounter + 1,
            };
        }
        case ADD_REGULAR_COMPONENT_RENDER_COUNTER: {
            return {
                ...state,
                regularComponentRenderCounter: state.regularComponentRenderCounter + 1,
            };
        }
        case ADD_MEMO_COMPONENT_RENDER_COUNTER: {
            return {
                ...state,
                memoComponentRenderCounter: state.memoComponentRenderCounter + 1,
            };
        }
        default: {
            return state;
        }
    }
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            }
        }
        case SET_FILTER_REGULAR_REDUCER: {
            return {
                ...state,
                filterRegularReducer: action.payload,
            }
        }
        case GET_ALL_DATA: {
            return {
                ...state,
                filterDataWithUseSelector: state.data,
            }
        }
        case GET_DATA_WITH_FILTER: {
            return {
                ...state,
                filterDataWithUseSelector: state.listData.map(item => item.first_name.indexOf('A')),
            }
        }
        case GET_DATA_WITH_FILTER_REGULAR_REDUCER: {
            return {
                ...state,
                filterDataWithRegularReducer: state.listData.filter(item => item.first_name.toLowerCase().indexOf(state.filterRegularReducer) >= 0)
            }
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    countersReducer,
    filterReducer,
});

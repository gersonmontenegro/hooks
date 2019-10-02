import {
    ADD_NO_MEMO_COUNT,
    ADD_MEMO_COUNT,
    ADD_REGULAR_COMPONENT_RENDER_COUNTER,
    ADD_MEMO_COMPONENT_RENDER_COUNTER,
    SET_FILTER,
    GET_DATA_WITH_FILTER,
    GET_ALL_DATA,
    SET_FILTER_REGULAR_REDUCER,
    GET_DATA_WITH_FILTER_REGULAR_REDUCER,
} from './types';

export const addNoMemoCount = () => ({
    type: ADD_NO_MEMO_COUNT,
});

export const addMemoCount = () => ({
    type: ADD_MEMO_COUNT,
});

export const addRegularComponentRenderCount = () => ({
    type: ADD_REGULAR_COMPONENT_RENDER_COUNTER,
});

export const addMemoComponentRenderCount = () => ({
    type: ADD_MEMO_COMPONENT_RENDER_COUNTER,
});

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});

export const setFilterRegularReducer = filter => ({
    type: SET_FILTER_REGULAR_REDUCER,
    payload: filter,
});

export const getDataWithFilter = () => ({
    type: GET_DATA_WITH_FILTER,
});

export const getDataWithFilterRegularReducer = () => ({
    type: GET_DATA_WITH_FILTER_REGULAR_REDUCER,
});

export const getAllData = () => ({
    type: GET_ALL_DATA,
});

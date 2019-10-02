import { createSelector } from 'reselect';

const listData = state => state.filterReducer.listData;
const filter = state => state.filterReducer.filter;

export const selectFilteredData = createSelector(
    listData,
    filter,
    (listData, filter) => listData.filter(item => item.first_name.toLowerCase().indexOf(filter) >= 0)
);

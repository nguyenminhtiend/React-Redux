import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeSelectQuotations = () =>
  createSelector(selectHome, homeState => homeState.get('quotations'));

export { makeSelectUsername, makeSelectQuotations };

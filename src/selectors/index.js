import {createSelector} from 'reselect'

export const weatherSelector = state => state.weather.valueSeq().toArray();


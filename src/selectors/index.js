import {mapToArr} from '../reducer/utils'

export const weatherSelector = state => state.weather.entities.valueSeq().toArray();


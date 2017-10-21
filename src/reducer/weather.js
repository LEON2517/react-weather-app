import { DELETE_WEATHERDISPLAY, LOAD_ALL_WEATHER } from '../constants'
import { arrToMap, mapToArr } from './utils'
import { Map, Record } from 'immutable'

const WeatherRecord = Record({
    id: null,
    name: null,
    main: {},
    sys: {}
});

const ReducerRecord = Record({
    entities: arrToMap([], WeatherRecord),
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
    const { type, payload, response } = action;

    switch (type) {
        case DELETE_WEATHERDISPLAY:
            return state.deleteIn(['entities', payload.id]);

        case LOAD_ALL_WEATHER:
            return state.set('entities', arrToMap([response], WeatherRecord));
    }

    return state
}
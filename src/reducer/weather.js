import { DELETE_WEATHER, LOAD_ALL_WEATHER, SUCCESS, START, ADD_LOCATION } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const WeatherRecord = Record({
    id: null,
    name: null,
    main: {},
    sys: {}
});

const ReducerRecord = Record({
    entities: arrToMap([], WeatherRecord),
    loading: false,
    loaded: false
});

const defaultState = new ReducerRecord();

export default (state = defaultState, action) => {
    const { type, payload, response } = action;

    switch (type) {
        case DELETE_WEATHER:
            return state.deleteIn(['entities', payload.id]);

        case LOAD_ALL_WEATHER + START:
            return state.set('loading', true);

        case LOAD_ALL_WEATHER + SUCCESS:
            return state
                .set('entities', arrToMap([response], WeatherRecord))
                .set('loading', false)
                .set('loaded', true);

        case ADD_LOCATION + SUCCESS:
            return state.set('entities', arrToMap([response], WeatherRecord))
    }
    return state
}
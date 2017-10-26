import { DELETE_LOCATION, GET_LOCATION_COORDS, SUCCESS, START, FAIL, ADD_LOCATION} from '../constants'
import { arrToMap } from './utils'
import { OrderedMap, Record } from 'immutable'

const WeatherRecord = Record({
    id: null,
    name: null,
    main: {},
    sys: {},
    weather: []
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
        case DELETE_LOCATION:
            return state.deleteIn(['entities', payload.id]);

        case GET_LOCATION_COORDS + START:
            return state.set('loading', true);

        case GET_LOCATION_COORDS + SUCCESS:
            return state
                .set('entities', arrToMap([response], WeatherRecord))
                .set('loading', false)
                .set('loaded', true);

        case GET_LOCATION_COORDS + FAIL:
            return state
                .set('loading', false)
                .set('loaded', false);

        case ADD_LOCATION  + START:
            return state.set('loading', true);

        case ADD_LOCATION + SUCCESS:
            return state
                .mergeIn(['entities'], arrToMap([response], WeatherRecord))
                .set('loading', false)
                .set('loaded', true);

        case ADD_LOCATION + FAIL:
            return state
                .set('loading', false)
                .set('loaded', false);


    }
    return state
}
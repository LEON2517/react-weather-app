import {START, SUCCESS, FAIL} from '../constants'
import {push} from 'react-router-redux'

export default store => next => action => {
    const {callAPI, type, ...rest} = action;

    if (!callAPI) return next(action);
    console.log('callAPI:', callAPI);

    next({
        ...rest,
        type: type + START
    });


    //dev only!!!!
    setTimeout(() => fetch(callAPI)
            .then(res => {
                if(res.status >=400) throw new Error(res.statusText);
                return res.json()})
            .then(response =>
                next({
                    ...rest,
                    type: type + SUCCESS,
                    response}))
            .catch(error => {
                next(push('./error'));

                next({
                    ...rest,
                    type: type + FAIL,
                    error
                })
            })
        , 1000)
}
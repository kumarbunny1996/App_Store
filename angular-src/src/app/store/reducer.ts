import { User } from './../model/user';
import {State} from './../interfaces/state';
import * as homeActions from './actions';

export const initialState: State = {
    name: 'sathish',
};

export function homeReducer(state: State = initialState, action: homeActions.Home): State {
    switch (action.type){
        case homeActions.ActionTypes.Home:
            return {...state, name: action.payload.name};
        default:
           return state;
    }
}


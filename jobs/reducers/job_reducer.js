import { FETCH_JOBS } from '../action/types';

const INITIAL_STATE = {
    results: []
};

export default function(state, action) {
    switch (action.type) {
        case FETCH_JOBS:
return action.payload;


        default: 
        return state;
    }
}
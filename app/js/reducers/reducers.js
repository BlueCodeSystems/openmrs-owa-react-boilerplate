import {DISCARD_CURRENT_PATIENT, LOAD_CURRENT_PATIENT, PATIENT_SEARCH} from '../actions/actions'

export function currentPatient(state = {}, action) {
    switch (action.type) {
        case DISCARD_CURRENT_PATIENT:
            return {};
        case LOAD_CURRENT_PATIENT + '_PENDING':
            return {
                loading: action.patientUuid
            };
        case LOAD_CURRENT_PATIENT + '_FULFILLED':
            return action.payload;
        default:
            return state
    }
}

export function patientSearch(state = [], action) {
    switch (action.type) {
        case PATIENT_SEARCH + '_PENDING':
            return {loading: true};
        case PATIENT_SEARCH + '_FULFILLED':
            console.log(action);
            return action.payload;
        default:
            return state;
    }
}
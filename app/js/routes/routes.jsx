import React from 'react'
import {Route} from 'react-router'
import App from '../components/App'
import FindPatient from '../components/FindPatient'
import ShowPatient from '../components/ShowPatient'
import Help from '../components/Help'
import {loadCurrentPatient} from '../actions/patientActions'

export default (store) => {

    const fetchPatientOnEnter = (nextState, replace) => {
        store.dispatch(loadCurrentPatient(nextState.params.patientUuid));
    };

    return (
            <Route path="/" component={App}>
                <Route path="/findPatient" component={FindPatient}/>
                <Route path="/showPatient/:patientUuid" component={ShowPatient} onEnter={fetchPatientOnEnter}/>
                <Route path="/help" component={Help}/>
            </Route>
    );
}
import React, { useState, useEffect } from 'react';
// import { store, sagaMiddleware } from '../store';
// import { SendToClient, watcherSaga } from '../actions'
import AlertMessages from './AlertMessages';
const AddEvent = function (props) {
    const [eventName, setEventName] = useState();
    const [eventDate, setEventDate] = useState();
    const [contactName, setContactName] = useState();
    const [eventType, setEventType] = useState();
    const [eventStartTime, setEventStartTime] = useState();
    const [eventEndTime, setEventEndTime] = useState();

    const [message, setMessage] = useState("");
    const [eventNameErrMsg, setEventNameErrMsg] = useState("Please Enter Event Name");


    // store.subscribe(() => {
    //     let Result = store.getState().clientlistdata;
    //     setMessage(Result?.status);
    // })
    useEffect(() => {
        if (eventName) { setEventNameErrMsg("") } else { setEventNameErrMsg("Please Enter Event Name") }
    })
    const onCancel = () => {
        props.history.push('/events');
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!eventName) { setMessage("Please Enter Event Name"); }
        const AccountDetails = { eventName: eventName, contactName: contactName };
        console.log(AccountDetails);
        // sagaMiddleware.run(watcherSaga);
        // store.dispatch(SendToClient(AccountDetails));
    }
    return (
        <div className="row pl-3">
            <div className="col-md-6 p-3">
                <span className="form-title">Add Event</span>
                {/* <div class="field">
                    <input type="input" class="" placeholder="Name" name="name" id='name' required onChange={(e) => setEventName(e.target.value)} />
                    <label for="name" class="">Name</label>
                </div>

                <div class="field">
                    <input type="input" class="" placeholder="Event Date" name="eventdate" id='eventdate' required onChange={(e) => setEventName(e.target.value)} />
                    <label for="eventdate" class="">Event Date</label>
                </div> */}

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label for="Event Name">Event Name</label>
                        <input type="text" placeholder="Name" className="form-control" onChange={(e) => setEventName(e.target.value)} />

                    </div>
                    <div className="form-group">
                        <label>Event Date</label>
                        <input type="date" onChange={(e) => setEventDate(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Contact Name</label>
                        <input type="text" onChange={(e) => setContactName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Event Type</label>
                        {/* <input type="text"  onChange={(e) => setEventType(e.target.value)} className="form-control" /> */}
                        <select className="form-control ddl" onChange={(e) => setEventType(e.target.value)}>
                            <option>Seminar</option>
                            <option>Festivals</option>
                            <option>Sport Event</option>
                            <option>product launch</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Event Start Time</label>
                        <input type="text" onChange={(e) => setEventStartTime(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Event End Time</label>
                        <input type="text" onChange={(e) => setEventEndTime(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success btn-submit" />
                        <input type="button" value="Cancel" onClick={onCancel} className="btn btn-danger btn-submit" />
                    </div>
                </form>
            </div>
            <div>
                <AlertMessages description={message}/>
            </div>
        </div>
    )
}

export default AddEvent
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const EventsList = function () {

    let dt = new Date();
    console.log("Date format", dt);
    let month = dt.getMonth() < 9 ? "0" + dt.getMonth() : dt.getMonth();
    let tDay = dt.getDate() + "-" + month + "-" + dt.getFullYear();

    const EventDataSeeder = [
        { eventid: 1, eventdate: tDay, eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 2, eventdate: tDay, eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 3, eventdate: '30-07-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 4, eventdate: '31-07-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 5, eventdate: '31-07-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' }
    ]
    const onAddEvent = () => {

    }
    const [EventData, setEventData] = useState(EventDataSeeder);
    const onToday = () => {

        let Result = EventData.filter((data, idx) => {
            return data.eventdate === tDay;
        })
        setEventData(Result);
    }
    return (
        <div className="p-3">
            <span className="form-title">Events</span>
            <button className="btn btn-sm btn-round float-right" onClick={onToday}>Today</button>
            <button className="btn btn-sm btn-round float-right">This Week</button>
            <button className="btn btn-sm btn-round float-right">This Month</button>
            <Link className="btn btn-sm btn-round float-right" to="/addevent">Add Event</Link>
            <div className="row mt-3">
                <div className="col-md-12">
                    <div>
                        <table className="table table-bordered table-sm">
                            <tr>
                                <th>Event Id</th>
                                <th>Event Date</th>
                                <th>Event Type</th>
                                <th>Event Start</th>
                                <th>Event End</th>
                                <th>Details</th>
                            </tr>
                            {EventData.map((data, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{data.eventid}</td>
                                        <td>{data.eventdate}</td>
                                        <td>{data.eventtype}</td>
                                        <td>{data.eventstart}</td>
                                        <td>{data.eventend}</td>
                                        <td><button className="btn btn-sm grid-btn-success">Details</button></td>
                                    </tr>
                                )
                            })
                            }
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventsList;
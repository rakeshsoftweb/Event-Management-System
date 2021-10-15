import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
const Dashboard = function () {
    const EventDataSeeder = [
        { eventid: 1, eventdate: '01-Sep-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 2, eventdate: '01-Sep-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 3, eventdate: '01-Sep-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 4, eventdate: '02-Sep-2021', eventtype: 'business meetup', eventstart: '10am', eventend: '5pm' },
        { eventid: 5, eventdate: '02-Sep-2021', eventtype: 'business meetup', eventstart: '6pm', eventend: '11pm' }
    ]
    const [EventData, setEventData] = useState(EventDataSeeder);
    let time = new Date();
    let StartHour = (EventDataSeeder[4].eventstart - time.getHours());
    StartHour = StartHour * 60000;

    const [eventTime, setEventTime]= useState(StartHour);
    useEffect(()=>{
       
    })
    const EventStart = ({startTime}) => (
        <CountdownCircleTimer
          isPlaying
          size={150}
          duration={600}
          colors={[
            ['#004777', 0.33],
            ['#F7B801', 0.33],
            ['#A30000', 0.33],
          ]}
        >
          {({ remainingTime }) =>  parseInt(remainingTime/60) + " : " + parseInt(remainingTime)}
        </CountdownCircleTimer>
      )
    return (
        <div className="p-3">
            <h5>Dashboard</h5>
            <div className="row pt-3 pb-3">
                <div className="col-md-4">
                    <div className="mr-3 p-3 box1">
                        <i className="fa fa-calendar fa-2x pr-3 pt-3 text-danger" aria-hidden="true"></i>
                        <p>Today Events : 6</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mr-3 p-3 box2">
                        <i className="fa fa-calendar fa-2x pr-3 pt-3 text-success" aria-hidden="true"></i>
                        <p>Week Events : 22</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mr-3 p-3 box3">
                        <i className="fa fa-calendar fa-2x pr-3 pt-3 text-primary" aria-hidden="true"></i>
                        <p>Month Events : 150</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                <h5>Event Recently Start</h5>
                    <div>
                    {/* <EventStart/> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="pt-3">
                        <span className="form-title">Today Events</span>
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
                                            <th>Confirmed</th>
                                        </tr>
                                        {EventData.map((data, idx) => {
                                            return (
                                                <tr key={idx}>
                                                    <td>{data.eventid}</td>
                                                    <td>{data.eventdate}</td>
                                                    <td>{data.eventtype}</td>
                                                    <td>{data.eventstart}</td>
                                                    <td>{data.eventend}</td>
                                                    <td><button className="btn btn-sm grid-btn-success">Confirmed</button></td>
                                                </tr>
                                            )
                                        })
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;
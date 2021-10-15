import React, { useState } from 'react';
const Header = function () {
    return (
        <div className="text-center">
            <div className="row header-row">
                <div className="col-md-4 text-left">
                    <img className="event-icon" src="assets/event-management.png" />
                    <span className="header-event">Event</span>
                </div>
                <div className="col-md-4 mt-2">
                        <span className="header-event">Demo </span>
                        <span className="header-management">Event Management </span>
                        <span className="header-system"> System</span>
                </div>
                <div className="col-md-4 text-right">
                <i className="fa fa-bell fa-1x pr-3 pt-3 user-notification" aria-hidden="true"></i>                
                <i className="fa fa-user fa-1x pr-3 pt-3 logged-user" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    )
}
export default Header;
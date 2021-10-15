import React, { useState } from 'react';
const AlertMessages = function (props) { 
    return (
        <div className="">
            <div className="row">
                <div className="col-md-12 ml-5 mr-5">
                    <p>{props.err}</p>
                    {props.description ? <div className="alert-messages">{props.description}</div>:null}
                </div>               
            </div>
        </div>
    )
}
export default AlertMessages;
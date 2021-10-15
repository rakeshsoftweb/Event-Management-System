import React, { useState } from 'react';
import { store, sagaMiddleware } from './store';
import { SendToClient, watcherSaga } from './actions'

const AddClient = function () {
    const [OrderLoactionCode, setOrderLoactionCode] = useState();
    const [retailsUserLogin, setRetailsUserLogin] = useState();
    const [salesId, setSalesId] = useState();
    const [accountId, setAccountId] = useState();
    const [LoginId, setLoginId] = useState("");
    const [mess, setMessage] = useState("");

    store.subscribe(() => {
        let Result = store.getState().clientlistdata;
        setMessage(Result?.status);
    })
    const onSubmit = (e) => {
        e.preventDefault();
        const AccountDetails = { OrderLoactionCode: OrderLoactionCode, retailsUserLogin: retailsUserLogin, salesId: salesId, accountId: accountId, LoginId: LoginId };
        sagaMiddleware.run(watcherSaga);
        store.dispatch(SendToClient(AccountDetails));
    }
    return (
        <div className="row">
            <div className="col-md-6">
                <span className="alert-danger">{mess}</span>
                <form onSubmit={onSubmit} >
                    <div className="form-group">
                        <label>Order Loaction Code</label>
                        <input type="text" name="OrderLoactionCode" onChange={(e) => setOrderLoactionCode(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Retails User Login</label>
                        <input type="text" name="retailsUserLogin" onChange={(e) => setRetailsUserLogin(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Sales ID</label>
                        <input type="text" name="salesId" onChange={(e) => setSalesId(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Account Id</label>
                        <input type="text" name="accountId" onChange={(e) => setAccountId(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Login Id</label>
                        <input type="text" name="loginId" onChange={(e) => setLoginId(e.target.value)} className="form-control" />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddClient
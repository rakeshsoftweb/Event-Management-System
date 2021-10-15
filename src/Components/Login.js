import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from '../SideBar';
const Login = function (props) {
    const history = useHistory();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("loggedIn","true");
        props.onUpdate();
        console.log("Login");
        history.push('/dashboard');        
    }

    useEffect(()=>{
        localStorage.removeItem("loggedIn");
    })

    return (
        <div className="hdr1">
            <div className="row">
                <div className="col-md-12 pl-5 pr-5">
                    <h4>Event Management System</h4>
                    <h6 className="mt-5">Account Login</h6>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>User Id</label>
                            <input type="text" onChange={(e) => setUserId(e.target.value)} className="form-control login-text" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password"  onChange={(e) => setPassword(e.target.value)} className="form-control login-text" />
                        </div>

                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-success btn-submit" />
                            <input type="reset" value="Reset" className="btn btn-danger btn-submit" />
                        </div>
                        <div className="mt-5 mb-2">
                            <label>Forget Password</label> <a href="#">Forget</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;
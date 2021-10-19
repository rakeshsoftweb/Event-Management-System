import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Dashboard from './Components/Dashboard';
import EventsList from './Components/EventsList';
import AddEvent from './Components/AddEvent';
import Users from './Components/Users';
import Settings from './Components/Settings';
import Logout from './Components/Logout';
import Reports from './Components/Reports';
import Login from './Components/Login';
import SideBar from './SideBar';
import Header from './Header';
import { useHistory } from 'react-router-dom';
function App(props) {
  const history = useHistory();
  const [showSideBar, setShowSideBar] = useState(false);
  const [leftBarSize, setLeftBarSize] = useState(6);
  const [rightBarSize, setRightBarSize] = useState(6);
  const [Logged, setLoggedUser] = useState(false);
  
  useEffect(() => {
  
  })
  const onSideBarHide = ()=>{
    console.log(leftBarSize);
    if(leftBarSize===1)
    {
      setLeftBarSize(2);
    } else {
      setLeftBarSize(1);
    }      
  }
  const onUpdate = () => {
    console.log("onUpdate in app triggered");
    setLeftBarSize(2);
    setRightBarSize(10);
    setShowSideBar(true);
    setLoggedUser(true);
  }
  return (
    <div>
      <Router>
      { Logged ? null : <Redirect to="/" />}
        <div className="container-fluid">         
          {showSideBar ?
            <div className="row">
              <div className="col-md-12 header-row text-white">
                <Header />there is some change here
              </div>
            </div> : null}
          <div className="row">
            <div className={`col-md-${leftBarSize}${showSideBar ? " bg-sidebar " : null}`}>
              {showSideBar ? <div className="sidebar"><SideBar leftcol={leftBarSize} sideBarHide={onSideBarHide} /></div> : <Login onUpdate={onUpdate} />}
            </div>
            <div className={"col-md-" + rightBarSize}>
              <Route exact path="/" component={LandingPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/events" component={EventsList} />
              <Route path="/addevent" component={AddEvent} />
              <Route path="/users" component={Users} />
              <Route path="/settings" component={Settings} />
              <Route path="/logout" component={Logout} />
              <Route path="/reports" component={Reports} />
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;


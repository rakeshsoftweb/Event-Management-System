import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const SideBar = function (props) {
    const [showSideBar, setshowSideBar] = useState(false);
    const [MenuBtnText, setMenuBtnText] = useState("H");
    useEffect(() => {
        const loggedInUser = localStorage.getItem("loggedIn");
        if (loggedInUser) { setshowSideBar(true) };
    })
    const onHideSideBar = () => {
        if (MenuBtnText === "H") {
            setMenuBtnText("S");
        } else {
            setMenuBtnText("H");
        }
        props.sideBarHide();
    }
    return (
        <div className="">
            <div className="mt-3 text-center">
                <span className="text-white mt-3 text-right font-weight-bold">
                    <i className="fa fa-user fa-2x sidebar-logged-user" aria-hidden="true"></i>
                    {props.leftcol === 2 ? "Admin" : null}</span>
                    <i onClick={onHideSideBar} className="fa fa-bars text-white float-right side-bar-img "></i>
            </div>
            {showSideBar ?
                <ul className="text-center">
                    <li className="sidebar-btn"><Link to="/dashboard" className="menu-link"><i className="fa fa-tachometer mr-1" aria-hidden="true"></i> {props.leftcol === 2 ? "Dashboard" : null}</Link></li>
                    <li className="sidebar-btn"><Link to="/events" className="menu-link"><i className="fa fa-calendar mr-2" aria-hidden="true"></i>{props.leftcol === 2 ? "Events" : null}</Link></li>
                    <li className="sidebar-btn"><Link to="/users" className="menu-link"><i className="fa fa-user-circle-o mr-2" aria-hidden="true"></i>{props.leftcol === 2 ? "Users" : null}</Link></li>
                    <li className="sidebar-btn"><Link to="/settings" className="menu-link"><i className="fa fa-cogs mr-2" aria-hidden="true"></i>{props.leftcol === 2 ? "Settings" : null}</Link></li>
                    <li className="sidebar-btn"><Link to="/reports" className="menu-link"><i className="fa fa-user mr-2" aria-hidden="true"></i>{props.leftcol === 2 ? "Reports" : null}</Link></li>
                </ul>
                : null}
        </div>
    )
}
export default SideBar;

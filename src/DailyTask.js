import React, { useEffect, useState } from 'react';
export const DailyTask = function () {
    const [projects, setProjects] = useState([]);
    const [modules, setModules] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [dailyTasks, setdailyTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saved, setSaved] = useState(0);

    useEffect(() => {
        console.log("use effect", setProjects.length);
        if (loading) {
            setProjects([{ projectname: 'E-Commerce' }, { projectname: 'ERP' }]);
            setModules([{ modulename: 'Product' }, { modulename: 'Order Management' }, { modulename: 'Delivery' }, { modulename: 'Payment' }]);
            setTasks([{ taskname: 'Development' }, { taskname: 'Design' }, { taskname: 'Testing' }]);
            setLoading(false);
        }
    })
    const onSubmit = (e) => {
        e.preventDefault();
        let RowData = dailyTasks;
        RowData.push({date:'2021-09-15',projectname:'e-commerce',modulename:'order management',task:'development',hours:6,remarks:'coding in order component'});
        setdailyTasks(RowData);
        console.log(dailyTasks);     
        setSaved(saved+1);
    }
    return (
        <div className="row ml-5">
            <div className="col-md-4">
                <form onSubmit={onSubmit}>
                    <h5>Daily Task</h5>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Project Name</label>
                        <select className="form-control">
                            {projects.map((data, idx) => {
                                return (<option key={idx}>{data.projectname}</option>)
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Module Name</label>
                        <select className="form-control">
                            {modules.map((data, idx) => {
                                return (<option key={idx}>{data.modulename}</option>)
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Task Name</label>
                        <select className="form-control">
                            {tasks.map((data, idx) => {
                                return (<option key={idx}>{data.taskname}</option>)
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Hours</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Remarks</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-md-8">
                <table className="table bordered">
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Project</th>
                            <th>Module</th>
                            <th>Task</th>
                            <th>Hours</th>
                            <th>Remarks</th>
                        </tr>
                        {
                            dailyTasks.map((data, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{data.date}</td>
                                        <td>{data.projectname}</td>
                                        <td>{data.modulename}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
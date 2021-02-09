import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks, selectFilterTasks } from '../features/tasksSlice';
const Filter = () => {
    const dispatch = useDispatch();
    const filter_tasks = useSelector(selectFilterTasks);

    const [filter, setFilter] = useState("");
    const hanleChange = (e) => {
        setFilter(e.target.value);
        console.log(filter);
        dispatch(filterTasks(filter));
        console.log(filter_tasks);
    };
    const updateList = () => {

        dispatch(filterTasks(filter));
        console.log(filter_tasks);
    };
    return (
        <div className="row">
            <div className="col-md-4">
                <input className="form-control" type="text" value={filter} onChange={hanleChange}></input>

            </div>
            <div className="col-md-4">
                <button className="btn btn-primary" onClick={updateList}>Search</button>

            </div>
        </div>
    )
}

export default Filter

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

    };
    const updateList = () => {

        dispatch(filterTasks(filter));
        console.log(filter_tasks);
    };
    return (
        <div>
            <input type="text" value={filter} onChange={hanleChange}></input>
            <button onClick={updateList}>Search</button>
        </div>
    )
}

export default Filter

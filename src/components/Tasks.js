import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectProjectTasks, setTasks, selectFilterTasks, selectFilterName } from '../features/tasksSlice';
import axios from '../app/axios';
import Task from './Task';

const Tasks = () => {
    const dispatch = useDispatch();
    const project_tasks = useSelector(selectProjectTasks);
    const filter_tasks = useSelector(selectFilterTasks);
    const filter_name = useSelector(selectFilterName);

    useEffect(() => {
        axios.get("/")
            .then(res => {
                dispatch(setTasks(res.data));
            });

    }, []);
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Task Name</th>
                        <th scope="col">Asignees</th>
                        <th scope="col">Priority</th>
                        <th scope="col">due date</th>
                    </tr>
                </thead>
                <tbody>
                    {filter_name ? filter_tasks.map((task) => (
                        <Task key={task.id} task={task}></Task>
                    )) : project_tasks.map((task) => (
                        <Task key={task.id} task={task}></Task>

                    ))}
                </tbody>
            </table>



        </div>
    )
}

export default Tasks

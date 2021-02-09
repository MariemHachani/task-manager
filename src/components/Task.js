import React, { useEffect, useState } from 'react'

const Task = ({ task }) => {
    const [priority, setPriority] = useState("");
    const [dateObject, setdateObject] = useState("");

    useEffect(() => {
        if (task.Priority === 1) {
            setPriority('Critical');
        } else {
            if (task.Priority === 2) {
                setPriority('High');

            } else {
                if (task.Priority === 3) {
                    setPriority('Meium');

                } else {
                    setPriority('Low');
                }
            }
        }
        const unixTimestamp = task.Due_date;

        const milliseconds = unixTimestamp * 1000;
        setdateObject(Date(milliseconds));
    }, [priority]);
    return (
        <tr>

            <td>{task.Task_name}</td>
            <td>{task.assigness} </td>
            <td>{priority} </td>
            <td>{dateObject}</td>

        </tr>
    )
}

export default Task

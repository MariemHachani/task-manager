import React, { useEffect, useState } from 'react'

const Task = ({ task }) => {
    const [priority, setPriority] = useState("");
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
    }, [priority]);
    return (
        <div>
            <p >{task.Task_name} - {task.assigness} - {priority} </p>
        </div>
    )
}

export default Task

import React from 'react';
import Task from './Task.jsx';

const Tasks = ({ tasks, onDeleteTask }) => {
    return (
        <div className="mt-10">
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
            ))}
        </div>
    );
};
export default Tasks;

import React from 'react';

const Task = ({ task }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md p-4 mb-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{task.title}</h3>
        </div>
    );
};

export default Task;

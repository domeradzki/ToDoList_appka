import React from 'react';

const Task = ({ task, onDeleteTask }) => {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-md p-4 mb-2">
            <h3 className="text-lg leading-6 font-medium text-gray-900">{task.title}</h3>
            <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onDeleteTask(task.id)}
            >
                Delete
            </button>
        </div>
    );
};
export default Task;

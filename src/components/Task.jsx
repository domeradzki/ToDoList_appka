
import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';

const Task = ({ task, onDeleteTask, onUpdateTaskStatus }) => {
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    // Load the completed state from localStorage and convert it to a boolean
    useEffect(() => {
        const loadedState = localStorage.getItem(`task-${task.id}`);
        setIsCompleted(loadedState === 'true');
    }, [task.id]);

    // Save the completed state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem(`task-${task.id}`, isCompleted ? 'true' : 'false');
    }, [isCompleted, task.id]);

    // Toggle the completed state
    const toggleCompleted = () => {
        const newIsCompleted = !isCompleted;
        setIsCompleted(newIsCompleted);
        onUpdateTaskStatus(task.id, newIsCompleted); // Wysyłka do Dashboard o zmianie statu
    };

    return (
        <div className={`bg-white shadow overflow-hidden sm:rounded-md p-4 mb-2 ${isCompleted ? 'line-through' : ''}`}>
            <div className="flex items-center justify-between">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isCompleted} onChange={toggleCompleted} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <h3 className={`text-lg leading-6 font-medium text-gray-900 ${isCompleted ? 'text-gray-400' : 'text-gray-900'}`}>{task.title}</h3>
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => onDeleteTask(task.id)}
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Task;

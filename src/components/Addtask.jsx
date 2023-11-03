import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            onAddTask(title.trim());
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <div className="relative flex-1">
                <input
                    id="task-input"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    type="text"
                    placeholder=" "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="task-input" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ">
                    Dodaj zadanie...
                </label>
            </div>
            <button
                className="ml-3 p-3 bg-blue-500 text-white rounded-lg hover:bg-gray-700 hover:text-white rounded-md px-3 py-3"
                type="submit"
            >
                Dodaj
            </button>
        </form>

    );
};

export default AddTaskForm;



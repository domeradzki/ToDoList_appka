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
            <input
                className="flex-1 p-2 border-2 border-gray-200 rounded-lg"
                type="text"
                placeholder="Add a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                type="submit"
            >
                Add
            </button>
        </form>
    );
};

export default AddTaskForm;

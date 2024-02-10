import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DataContext } from '../../DataProvider/DataProvider';

const AddTask = () => {
    const [tasks, setTasks] = useContext(DataContext);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDesc, setNewTaskDesc] = useState('');
    const [newTaskPriority, setNewTaskPriority] = useState('low');
    const handleTitle = (event) => {
        setNewTaskTitle(event.target.value);
    };
    const handleDesc = (event) => {
        setNewTaskDesc(event.target.value);
    };

    const handlePriorityChange = (event) => {
        setNewTaskPriority(event.target.value);
    };

    const addTask = () => {
        if (newTaskTitle.trim() !== '') {
            const newTask = {
                id: uuidv4(),
                title: newTaskTitle,
                desc: newTaskDesc,
                priority: newTaskPriority,
                status: 'incomplete'
            };
            setTasks([...tasks, newTask]);
            setNewTaskTitle('');
            setNewTaskPriority('low');
        }
    };
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    return (

        <div className='flex justify-center items-center py-10'>

            <div className="">
                <h2 className="text-3xl font-bold mb-4">Todo List</h2>
                <div className="mb-4 space-y-4">
                    <input
                        type="text"
                        placeholder="Add title"
                        value={newTaskTitle}
                        onChange={handleTitle}
                        className=" block border p-2 w-80"
                    />
                    <textarea
                        type="text"
                        rows={2}
                        placeholder="Add a new task..."
                        value={newTaskDesc}
                        onChange={handleDesc}
                        className=" block border p-2 w-80"
                    />
                    <select
                        value={newTaskPriority}
                        onChange={handlePriorityChange}
                        className="block ml-2 p-2 w-80"
                    >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                    </select>
                    <button onClick={addTask} className="block ml-2 p-2 text-center bg-emerald-500 rounded text-white">
                        Add Task
                    </button>

                </div>
            </div>

        </div>
    );
};

export default AddTask;
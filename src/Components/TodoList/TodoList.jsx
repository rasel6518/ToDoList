import { useState } from "react";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";
import Counter from "../Counter/Counter";
import PriorityFilter from "../PriorityFilter/PriorityFilter";
import useTask from "../../Hooks/useTask";

const TodoList = () => {
    const [tasks, setTasks] = useTask();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [editedTask, setEditedTask] = useState({ id: null, title: "", desc: "" });
    const [filterPriority, setFilterPriority] = useState("all");
    const toggleTaskStatus = (taskId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId
                ? { ...task, status: task.status === 'completed' ? 'incomplete' : 'completed' }
                : task
        );
        setTasks(updatedTasks);
    };
    const editTask = (taskId) => {
        const taskToEdit = tasks.find(task => task.id === taskId);
        setEditedTask({ id: taskId, title: taskToEdit.title, desc: taskToEdit.desc });
        setIsTodoEditable(true);
    };

    const saveEditedTask = () => {
        const updatedTasks = tasks.map((task) =>
            task.id === editedTask.id ? { ...task, title: editedTask.title, desc: editedTask.desc } : task
        );
        setTasks(updatedTasks);
        setIsTodoEditable(false);
        setEditedTask({ id: null, title: "", desc: "" });
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <div className="  ">

                {/* counter section */}

                <div className="md:flex justify-between items-center md:px-10">
                    <Counter />

                    {/* Priority filter  section */}

                    <PriorityFilter filterPriority={filterPriority} setFilterPriority={setFilterPriority} />
                </div>


                <div className="grid px-5 md:px-0 md:grid-cols-2 my-5 py-5 gap-5 lg:grid-cols-3">
                    {tasks
                        .filter((task) => filterPriority === "all" || task.priority === filterPriority)
                        .map((task) => (
                            <div key={task.id} className="bg-emerald-200  py-5 px-2">

                                {/* Task Title Section */}

                                <h1 className='text-xl px-5 capitalize mb-3 font-medium'>
                                    {isTodoEditable && editedTask.id === task.id ? (
                                        <input
                                            type="text"
                                            value={editedTask.title}
                                            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                                            className="w-60 md:w-80 "
                                        />
                                    ) : (
                                        task.title
                                    )}
                                </h1>

                                {/* Task Description Section */}

                                <div className="w-60 md:w-80  px-5">
                                    {isTodoEditable && editedTask.id === task.id ? (
                                        <textarea
                                            value={editedTask.desc}
                                            onChange={(e) => setEditedTask({ ...editedTask, desc: e.target.value })}
                                            className="w-60 md:w-80 "
                                        />
                                    ) : (
                                        task.desc
                                    )}
                                </div>

                                {/* Task Status Toggle Section */}

                                <div className="w-64 md:96 mt-5 flex justify-evenly items-center gap-2">
                                    <button
                                        onClick={() => toggleTaskStatus(task.id)}
                                        className={`cursor-pointer btn capitalize font-bold ${task.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}
                                    >
                                        {task.status}
                                    </button>

                                    {/* Task Priority Section */}

                                    <div className={`capitalize font-bold text-${task.priority}`}>
                                        {task.priority}
                                    </div>

                                    {/* Task Edit and Save Section */}

                                    <div className="flex justify-between gap-2">
                                        <button
                                            className="text-xl"
                                            onClick={() => {
                                                if (task.completed) return;

                                                if (isTodoEditable) {
                                                    saveEditedTask();
                                                } else {
                                                    editTask(task.id);
                                                }
                                            }}
                                            disabled={task.completed}
                                        >
                                            {isTodoEditable && editedTask.id === task.id ? <AiFillSave /> : <AiFillEdit />}
                                        </button>

                                        {/* Task Delete Section */}

                                        <AiFillDelete onClick={() => deleteTask(task.id)} className="text-xl "></AiFillDelete>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
import { useContext, useState } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { AiFillDelete, AiFillEdit, AiFillSave } from "react-icons/ai";

const TodoList = () => {
    const [tasks, setTasks] = useContext(DataContext);
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [editedTask, setEditedTask] = useState({ id: null, title: "", desc: "" });
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
                <div className="grid px-5 md:px-0 md:grid-cols-2 my-5 py-5 gap-5 lg:grid-cols-3">
                    {tasks.map((task) => (
                        <div key={task.id} className="bg-emerald-200  py-5 px-2">
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
                            <div className="w-64 md:96 mt-5 flex justify-evenly items-center gap-2">
                                <button
                                    onClick={() => toggleTaskStatus(task.id)}
                                    className={`cursor-pointer btn capitalize font-bold ${task.status === 'completed' ? 'text-green-600' : 'text-red-600'}`}
                                >
                                    {task.status}
                                </button>
                                <div className={`capitalize font-bold text-${task.priority}`}>
                                    {task.priority}
                                </div>
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
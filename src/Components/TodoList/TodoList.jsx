import { useContext } from "react";
import { DataContext } from "../../DataProvider/DataProvider";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const TodoList = () => {
    const [tasks, setTasks] = useContext(DataContext);
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    return (
        <div>
            <div className="  ">

                <div className="grid md:grid-cols-2 my-5 py-5 gap-5 lg:grid-cols-3">
                    {tasks.map(task => (
                        <div key={task.id} className="bg-emerald-200 py-5 px-2" >

                            <h1 className='text-xl px-5 capitalize font-medium'>
                                {task.title}
                            </h1>
                            <div className="w-80 px-5">
                                {task.desc}
                            </div>
                            <div className="w-96 mt-5 flex justify-evenly items-center gap-2">
                                <div className=" capitalize font-bold">{task.status}</div>
                                <div className=" capitalize font-bold">{task.priority}</div>
                                <div className="flex justify-between gap-2">
                                    <AiFillEdit></AiFillEdit>
                                    <AiFillDelete onClick={() => deleteTask(task.id)} className="text-xl bg-red-500 text-white"></AiFillDelete>
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
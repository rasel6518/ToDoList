import useTask from "../../Hooks/useTask";

const Counter = () => {
    const [tasks, setTasks] = useTask()
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    return (
        <div>
            <div className="text-center md:flex gap-5 text-xl font-medium">
                <p>Total Tasks: {totalTasks}</p>
                <p>Completed Tasks: {completedTasks}</p>
            </div>
        </div>
    );
};

export default Counter;
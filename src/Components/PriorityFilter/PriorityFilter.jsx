import useTask from "../../Hooks/useTask";


const PriorityFilter = ({ filterPriority, setFilterPriority }) => {
    const [tasks, setTasks] = useTask()


    const priorityOptions = ["all", "low", "medium", "high"];

    const handlePriorityChange = (selectedPriority) => {
        setFilterPriority(selectedPriority);
    };

    return (
        <div>
            {/* Priority filter dropdown section */}
            <div className="flex justify-center gap-2 mt-4">
                <label htmlFor="priorityFilter" className="text-xl font-medium">Priority :</label>
                <select
                    id="priorityFilter"
                    value={filterPriority}
                    onChange={(e) => handlePriorityChange(e.target.value)}
                    className="border text-xl font-medium rounded-md px-2 py-1"
                >
                    {priorityOptions.map((priority) => (
                        <option key={priority} value={priority}>
                            {priority}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default PriorityFilter;
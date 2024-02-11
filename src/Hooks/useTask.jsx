
import { useContext } from 'react';
import { DataContext } from '../DataProvider/DataProvider';

const useTask = () => {
    const [tasks, setTasks] = useContext(DataContext)
    return [tasks, setTasks]
};

export default useTask;
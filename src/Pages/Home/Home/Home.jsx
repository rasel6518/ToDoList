import AddTask from "../../../Components/AddTask/AddTask";
import TodoList from "../../../Components/TodoList/TodoList";


const Home = () => {
    return (
        <div className="min-h-screen ">
            <AddTask />
            <TodoList />

        </div>
    );
};

export default Home;
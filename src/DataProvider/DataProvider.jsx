import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const getToDoList = JSON.parse(localStorage.getItem('tasks'));
    const [tasks, setTasks] = useState(getToDoList ? getToDoList : []);

    return (
        <DataContext.Provider value={[tasks, setTasks]}>
            {children}
        </DataContext.Provider>
    );
}
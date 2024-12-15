// Todo.js
import React, { useState } from "react";
import "./App.css"; // 引入CSS檔案

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    };

    const addTask = () => {
        if (task.trim() === "" || deadline === "") {
            alert("請輸入待辦事項和有效的截止日期！");
            return;
        }

        const newTask = {
            id: tasks.length + 1,
            task,
            deadline,
            done: false,
        };

        setTasks([...tasks, newTask]);
        setTask("");
        setDeadline("");
    };

    const markDone = (id) => {
        const updatedTasks = tasks.map((t) =>
            t.id === id ? { ...t, done: true } : t
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <header>
                <h1>待辦事項</h1>
            </header>
            <main>
                <div className="task-form">
                    <input
                        type="text"
                        placeholder="輸入待辦事項"
                        value={task}
                        onChange={handleTaskChange}
                    />
                    <input
                        type="date"
                        value={deadline}
                        onChange={handleDeadlineChange}
                    />
                    <button onClick={addTask}>新增待辦事項</button>
                </div>
                <h2>待辦事項列表</h2>
                <div className="task-list">
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                {task.task} - 截止日期：{task.deadline}
                                {!task.done && (
                                    <button onClick={() => markDone(task.id)}>
                                        完成
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default Todo;

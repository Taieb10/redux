import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { addTask } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import "./AddTask.css";

function AddTask() {
    const [newTask, setNewTask] = useState({
        id: "",
        description: "",
        isDone: false,
    });

    const handleChange = (e) => {
        setNewTask({ id: uuid_v4(), description: e.target.value });
    };

    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (newTask.description !== "") {
            dispatch(addTask({ newTask: newTask }));
            setNewTask({
                id: "",
                description: "",
                isDone: false,
            });
        } else {
            alert("can not add an empty task");
        }
    };

    return (
        <div className="AddTask">
            <h1>Todo App!</h1>
            <div className="addField">
                <Form.Control
                    id="addTaskInput"
                    value={newTask.description}
                    size="lg"
                    type="text"
                    placeholder="Add task..."
                    onChange={handleChange}
                />
                <Button
                    variant="outline-primary"
                    style={{ border: "2px white solid", color: "white" }}
                    onClick={handleSubmit}
                >
                    Add
                </Button>
            </div>
        </div>
    );
}

export default AddTask;

import React from "react";
import { Button } from "react-bootstrap";
import "./Task.css";
import { useDispatch } from "react-redux";
import EditTask from "../EditTask/EditTask";
import { toggleIsDone } from "../../redux/Actions";

function Task({ taskData, index }) {
    const dispatch = useDispatch();
    const handleIsDone = () => {
        dispatch(toggleIsDone({ id: taskData.id }));
    };
    return (
        <div className="task">
            <h4
                style={{
                    textDecoration: taskData.isDone ? "line-through" : "none",
                }}
            >
                <span className="Task_Number">Task {Number(index) + 1}:</span>{" "}
                {taskData.description}
            </h4>
            <div className="taskBtns">
                <Button
                    variant={taskData.isDone ? "danger" : "success"}
                    onClick={handleIsDone}
                >
                    {taskData.isDone ? "Undo" : "Done"}
                </Button>
                <EditTask taskData={taskData} />
            </div>
        </div>
    );
}

export default Task;

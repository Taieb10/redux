import React from "react";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import "./ListTask.css";
import { Button } from "react-bootstrap";

function ListTask() {
    const tasks = useSelector((state) => state.tasksReducer.tasks);
    console.log(tasks);
    /*// const todos = useSelector((state) => state.todosReducer.todos);

    // const [todosList, setTodosList] = useState(todos);
    const [showDone, setShowDone] = useState(false);
    const [showNotDone, setShowNotDone] = useState(false);

    // const handleTodosList = () => {
    //     console.log("handleTodos was executed")
    //     if (showDone === true) {
    //         setTodosList(todos.filter(task => task.isDone === true))
    //     }
    //     else if (showNotDone === true) {

    //         setTodosList(todos.filter(task => task.isDone === false))
    //     }
    // }
    useEffect(() => {
        // handleTodosList()
        // eslint-disable-next-line
    }, [showNotDone, showDone]);

    const handleShowDone = () => {
        setShowDone(true);
    };
    const handleShowNotDone = () => {
        setShowDone(false);
        setShowNotDone(true);
    };
    const handleReset = () => {
        setShowDone(false);
        setShowNotDone(false);
    };*/

    console.log(tasks);

    return (
        <div className="listTask">
            <div className="filter_btns" style={{ marginBottom: "25px" }}>
                <Button variant="outline-success">Show Done</Button>
                <Button variant="outline-danger"> Show Not Done</Button>
                <Button variant="info">Remove All Filters</Button>
            </div>
            {tasks.map((task, index) => (
                <Task key={task.id} taskData={task} index={index} />
            ))}
        </div>
    );
}

export default ListTask;

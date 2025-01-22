'use client';

import { useEffect } from "react";
import { useTasksStore } from "../../hooks/useTasksStore";
import TaskCard from "./TaskCard";
import { Task } from "@/app/interfaces/task.interface";

const TaskDisplay = () => {

    const { tasks, startLoadingTasks, loading } = useTasksStore();

    useEffect(() => {
        startLoadingTasks();

    }, [])

    return (
        <>
            {
                loading
                    ?
                    <p className="mt-8 text-xl">Loading...</p>
                    :

                    <div className="flex flex-col mt-8">
                        <h4 className="text-xl">
                            Tasks
                        </h4>

                        {
                            tasks.map((task: Task) => (
                                <TaskCard task={task} key={task._id} />
                            ))
                        }
                    </div>
            }
        </>

    )
}

export default TaskDisplay

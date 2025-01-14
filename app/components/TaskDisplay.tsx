'use client';

import { useEffect } from "react";
import { useTasksStore } from "../hooks/useTasksStore";
import TaskCard from "./TaskCard";

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
                            tasks.map((task: any) => (
                                <TaskCard task={task} key={task.title} />
                            ))
                        }
                    </div>
            }
        </>

    )
}

export default TaskDisplay

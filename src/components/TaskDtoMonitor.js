import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TaskDtoMonitor = () => {
  const { tasks } = useContext(GlobalContext);

  const taskNames = tasks.map(task => task.taskName);

  const uniqueTaskNames = [...new Set(taskNames)].length;

  return (
    <>
      <h3>Task Balance</h3>
    <h1>{uniqueTaskNames}</h1>
    </>
  )
}

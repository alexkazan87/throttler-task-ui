import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TasksResults = () => {
  const { tasks } = useContext(GlobalContext);

  const success = tasks.filter(task => task.task.success).length;
  const fails = tasks.filter(task => !task.task.success).length;

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Success</h4>
  <p className="money plus">{success}</p>
        </div>
        <div>
          <h4>Fails</h4>
  <p className="money minus">{fails}</p>
        </div>
      </div>    
  )
}

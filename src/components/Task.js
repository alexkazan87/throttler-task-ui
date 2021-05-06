import * as React from 'react';

export const Task = ({ task }) => {
  return (
    <ul className="list">
    <li className= {!task.task.success? 'minus' : 'plus'}>
  <span className="text-muted mb-2"> 
   <b>TaskName:</b> {task.taskName}</span>
    <span className="text-muted mb-2">  
      <b>FireDate:</b> {task.fireDate}</span>
    <span className="text-muted mb-2">  
      <b>Error:</b> {task.error}</span> 
    <span className="text-muted mb-2">  
    <b>Tries:</b> {task.task.trai} </span> 
    </li>
    </ul>
  )
}

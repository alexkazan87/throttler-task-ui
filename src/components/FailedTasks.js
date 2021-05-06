import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const FailedTasks = () => {
  const { tasks, enableTask } = useContext(GlobalContext)
  const failedTasks = tasks
    .filter((task) => !task.task.success)
    .map((task) => task.taskName)
  const uniqueFailedTasks = [...new Set(failedTasks)]
  return (
    <div className='container'>
      <>
        <h3>Failed Tasks</h3>
        <ul className='list'>
          {uniqueFailedTasks.map(function (uniqueFailedTask) {
            return (
              <li key={uniqueFailedTask} className={'minus'}>
                {uniqueFailedTask}
                <button
                  onClick={() =>
                    enableTask(
                      tasks.find((task) => task.taskName === uniqueFailedTask)
                        .task
                    )
                  }
                  className='run-btn'
                >
                  Run
                </button>
              </li>
            )
          })}
        </ul>
      </>
    </div>
  )
}

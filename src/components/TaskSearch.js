import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Task } from './Task';


export const TaskSearch = () => {
  const [text, setText] = useState('');

  const { getTasks } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    getTasks(text);
  }

  return (
    <>
      <h3>Search by</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Task Group</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        {/* <button className="btn" > Task History</button> */}
        <button class="pushable">
        <span class="front">
         History
        </span>
        </button>
      </form> 
    </>
  )
}

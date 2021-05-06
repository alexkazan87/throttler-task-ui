import React, {useContext , useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Task } from './Task';
import { Pagination } from './Pagination';

export const LogHistory = () => {
  const { tasks } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tasks.slice(indexOfFirstPost, indexOfLastPost);
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <>
      <h3>Log History</h3>
      <ul className="list">
        {currentPosts.map(task => (<Task key={task.objectId} task={task} />))
       }
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={tasks.length}
        paginate={paginate}
      />
    </>
  )
}

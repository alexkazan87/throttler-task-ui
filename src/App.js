import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { TaskSearch } from './components/TaskSearch';
import { LogHistory } from './components/LogHistory';
import { TaskDtoMonitor } from './components/TaskDtoMonitor';
import { TasksResults } from './components/TasksResults';
import { DetailsPage } from './components/DetailsPage';
import { FailedTasks } from './components/FailedTasks';
import { GlobalProvider } from './context/GlobalState';
import {   BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams } from "react-router-dom";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      {/* <Header /> */}
      <div className="container">
      <Router>
      <div>
      <ul id="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/failedTasks">Failed Tasks</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
      </ul>
        <Switch>
          <Route path="/failedTasks">
            <FailedTasks />
          </Route>
          <Route path="/Details">
            <Details />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  
      </div>
    </GlobalProvider>
  );
}

function Home() {
  return (
    <div className="container">
      <TaskSearch />
        <TasksResults/>
       <TaskDtoMonitor/>
      <LogHistory/>
     </div>);
}


function Details() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Details</h2>

      <ul>
        <li>
          <Link to={`${match.url}/activetasks`}>Active Tasks</Link>
        </li>
        <li>
          <Link to={`${match.url}/taskgroup`}>
           Task Groups
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}



export default App;

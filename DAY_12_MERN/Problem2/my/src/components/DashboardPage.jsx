

import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import Profile from './Profile';
import Settings from './Settings';

function DashboardPage() {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Dashboard Page</h2>
      <nav>
        <ul>
          <li>
            <Link to={`${url}/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`${url}/settings`}>Settings</Link>
          </li>
        </ul>
      </nav>

      <Route path={`${path}/profile`}>
        <Profile />
      </Route>
      <Route path={`${path}/settings`}>
        <Settings />
      </Route>
    </div>
  );
}

export default DashboardPage;

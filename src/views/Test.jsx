import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import Child1 from '../components/Child1';
import Child2 from '../components/Child2';

export const Test = (props) => {
  console.log(props);

  let { path, url } = useRouteMatch();

  console.log('path', path);
  console.log('url', url);

  let params = useParams();

  console.log(params);

  return (
    <Router>
      <h1>TEST</h1>
      <Switch>
        <Route path='/test/child1/:childId' component={Child1} />
        <Route path='/test/child2' component={Child2} />
        {/* <Route component={Child2} /> */}
      </Switch>
    </Router>
  );
};

export default Test;

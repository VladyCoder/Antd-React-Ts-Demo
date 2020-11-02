import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import FormDemo from './pages/Form';
import Option_1 from './pages/Test/Option_1';
import Option_2 from './pages/Test/Option_2';
import Option_3 from './pages/Test/Option_3';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FormDemo} exact />
        <Route path="/option1" component={Option_1} exact />
        <Route path="/option2" component={Option_2} exact />
        <Route path="/option3" component={Option_3} exact />
      </Switch>
    </Router>
  );
}

export default App;

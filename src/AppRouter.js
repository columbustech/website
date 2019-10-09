import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import App from './App';
import AppStore from './AppStore';

class AppRouter extends React.Component {
    render() {
        return(
          <Router>
            <Switch>
              <Route path='/appstore' component={AppStore} />
              <Route path='/' component={App} />
              <Redirect from='*' to='/' />
              </Switch>
          </Router>
        );
    }
}

export default AppRouter;

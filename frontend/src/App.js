import 'antd/dist/antd.css';
import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';
import GuardedRoute from "./guards/RouteGuard"

/**
 * Pages
 */
import Github from "./pages/Github"
import Login from "./pages/Login"
import NothingFound from "./pages/NothingFound"

class App extends Component{
  render(){     
    return (
      <React.Fragment>
        <BrowserRouter>
          <Layout style={ {minHeight:"100vh"}}>
              <Switch>
                <GuardedRoute exact path='/' component={Github} />
                <Route path="/login" component={Login} />
                <Route component={NothingFound} />
              </Switch>
          </Layout>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

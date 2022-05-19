import React from 'react';
import { Switch,BrowserRouter, Route } from 'react-router-dom';

const Routes = ({ routes }) => {
    const render = (route) => (
      <Route
        key={`route_${routes.indexOf(route)}`}
        exact={route.exact}
        path={route.path}
        render={(props) => {
          if (route.name) {
            document.title = route.name;
          }
          return <route.component {...props} />;
        }}
      />
    );
    return (
        <BrowserRouter>
            <Switch>{routes.map((route) => render(route))}</Switch>
        </BrowserRouter>
    );
  };
  
  export default Routes;

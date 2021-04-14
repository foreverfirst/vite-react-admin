import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./router";
import { HashRouter, Route, Switch } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const routerFun = (routes) => {
    return routes.map((route, i) =>
      route.children ? (
        <Route
          key={i}
          exact
          path={route.path}
          render={(props) =>
            route.component ? (
              <route.component {...props}>
                {routerFun(route.children)}
              </route.component>
            ) : (
              <div>{routerFun(route.children)}</div>
            )
          }
        />
      ) : (
        <Route key={i} exact path={route.path} component={route.component} />
      )
    );
  };
  return (
    <div className="App">
      <HashRouter>
        <Switch>{routerFun(routes)}</Switch>
      </HashRouter>
    </div>
  );
}

export default App;

import React from 'react'
import Router from 'react-router'
import Home from './pages/home'
import Styles from './styles/style.less'


var { Route, NotFoundRoute } = Router;

var routes = (
 <Route handler={Home} path="/">
 </Route>
);

Router.run(routes, function (Handler) {
 React.render(<Handler/>, document.body);
});

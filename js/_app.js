var React  = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var App    = require('./app');
var Hello  = require('./hello');

var routes = (
  <Route handler={App}>
    <DefaultRoute handler={Hello} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

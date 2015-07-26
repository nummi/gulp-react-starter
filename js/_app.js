let React  = require('react');
let Router = require('react-router');
let { Route, DefaultRoute, RouteHandler, Link } = Router;

let App    = require('./app');
let Hello  = require('./hello');

let routes = (
  <Route handler={App}>
    <DefaultRoute handler={Hello} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});

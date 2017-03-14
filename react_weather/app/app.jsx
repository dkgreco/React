const React = require('react'),
    ReactDOM = require('react-dom'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router'),
    Main = require('Main'),
    Weather = require('Weather'),
    About = require('About'),
    Examples = require('Examples');

//Load Foundation and Custom CSS
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');

$('document').foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/about" component={About}/>
            <Route path="/examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

/* Experimental Code from stage-0:
 let objOne = {
 name: 'Dustin Greco',
 location: 'Broomfield, CO',
 sex: 'M'
 };

 let objTwo = {
 age: 29,
 ...objOne
 };

 console.log(objTwo);
 */
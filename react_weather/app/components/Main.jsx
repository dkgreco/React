const React = require('react'),
    Navigation = require('Navigation');

let Main = props => {
    "use strict";
    return (
        <div>
            <Navigation/>
            <h2>Main Component</h2>
            {props.children}
        </div>
    );
};

module.exports = Main;
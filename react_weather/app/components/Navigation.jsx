const React = require('react'),
    {Link, IndexLink} = require('react-router');

let Navigation = () => {
    "use strict";
    return (
        <div>
            <h2>Navigation Block</h2>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        </div>
    );
};

module.exports = Navigation;
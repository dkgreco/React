const React = require('react');

let Main;
Main = props => {
    "use strict";
    return (
        <div>
             <div>
                <div>
                    <p>Main.jsx Rendered</p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

module.exports = Main;
const React = require('react');

let WeatherMessage = props => {
    "use strict";
    let {city, temp} = props;
    return (
        <div>
            <h3>It's {temp} in {city}.</h3>
        </div>
    )
};

module.exports = WeatherMessage;
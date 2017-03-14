const React = require('react');

let WeatherMessage;
WeatherMessage = props => {
    "use strict";
    let {city, temp} = props;
    return (
        <div>
            <h3 className="text-center">It's {temp} in {city}.</h3>
        </div>
    )
};

module.exports = WeatherMessage;
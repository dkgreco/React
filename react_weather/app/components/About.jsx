const React = require('react');

let About;
About = () => {
    "use strict";
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <article>
                Welcome to this simple Weather Application built with React.js!
            </article>
            <br/>
            <p>
                This application leverages the following technologies:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react/" target="_blank">
                        React.js
                    </a>
                </li>
                <li>
                    <a href="https://nodejs.org/en/" target="_blank">
                        Node.js
                    </a>
                </li>
                <li>
                    <a href="http://foundation.zurb.com/sites/docs/" target="_blank">
                        Foundation
                    </a>
                </li>
                <li>
                    <a href="https://webpack.github.io/docs/" target="_blank">
                        Webpack
                    </a>
                </li>
                <li>
                    <a href="https://www.heroku.com" target="_blank">
                        Heroku
                    </a>
                </li>
                <li>
                    <a href="https://git-scm.com/" target="_blank">
                        Git
                    </a>
                </li>
                <li>
                    <a href="https://github.com/" target="_blank">
                        GitHub
                    </a>
                </li>
                <li>
                    <a href="http://openweathermap.org/" target="_blank">
                        openWeatherMap
                    </a>
                </li>
            </ul>
            <p>
                You may find the GitHub repository for this project
                <a href="https://github.com/dkgreco/ReactWeather" target="_blank">
                     here
                </a>.
            </p>
        </div>
    );
};

module.exports = About;

/*
 <Link to="https://github.com/dkgreco/ReactWeather"> here</Link>.
 <Link to="http://openweathermap.org/"> here</Link>.
 <Link to="http://foundation.zurb.com/sites/docs/"> here</Link>.
 */
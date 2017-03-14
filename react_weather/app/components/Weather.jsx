const React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap'),
    ErrorModal = require('ErrorModal');

let Weather;
Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,
            errorMessage: undefined
        }
    },
    handleSearch: function(city) {
        let that = this;
        this.setState({
            isLoading:true,
            city: undefined,
            temp: undefined
        });
        //debugger;
        function callSuccessHandler(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false,
                errorMessage: undefined
            });
        }

        function callFailureHandler(e) {
            that.setState({
                temp: undefined,
                city: undefined,
                isLoading: false,
                errorMessage: e.message
            });
        }

        openWeatherMap.getTemp(city).then(callSuccessHandler, callFailureHandler);
    },
    componentDidMount: function() {
        "use strict";
        let city = this.props.location.query.city;
        if (city && city.length > 0) {
            this.handleSearch(city);
            window.location = '#/';
        }
    },
    componentWillReceiveProps: function(propState) {
        "use strict";
        let city = propState.location.query.city;
        if (city && city.length > 0) {
            this.handleSearch(city);
            window.location = '#/';
        }
    },
    render: function() {
        /*let city = this.state.city,
            temp = this.state.temp;*/
        let {errorMessage, isLoading, city, temp} = this.state;

        function renderMessage() {
            "use strict";
            if (isLoading) {
                return <h3 className="text-center">Fetching the Weather...</h3>
            } else if (city && temp) {
                return <WeatherMessage city={city} temp={temp}/>
            }
        }

        function renderErrorModal() {
            "use strict";
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderErrorModal()}
            </div>
        );
    }
});

module.exports = Weather;
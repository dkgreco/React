const React = require('react'),
    WeatherForm = require('WeatherForm'),
    WeatherMessage = require('WeatherMessage'),
    openWeatherMap = require('openWeatherMap');

let Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(city) {
        let that = this;
        this.setState({isLoading:true});
        //debugger;
        function callSuccessHandler(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }

        function callFailureHandler(errorMessage) {
            alert(errorMessage);
            that.setState({temp:null, isLoading:false});
        }

        openWeatherMap.getTemp(city).then(callSuccessHandler, callFailureHandler);
    },
    render: function() {
        /*let city = this.state.city,
            temp = this.state.temp;*/
        let {isLoading, city, temp} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching the Weather...</h3>
            } else if (city && temp) {
                return <WeatherMessage city={city} temp={temp}/>
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
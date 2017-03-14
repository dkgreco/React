const React = require('react');

let WeatherForm;
WeatherForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let city = this.refs.city.value;
        if(city.length > 0) {
            this.refs.city.value = '';
            this.props.onSearch(city);
        }

    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="search" ref="city" placeholder="Search Weather By City"/>
                    <button type="submit" className="button hollow expanded">Fetch Weather</button>
                </form>
            </div>
        )
    }
});

module.exports = WeatherForm;
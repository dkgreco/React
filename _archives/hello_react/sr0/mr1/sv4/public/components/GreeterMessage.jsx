const React = require('react');

let GreeterMessage = React.createClass({
    render: function() {
        let name = this.props.name,
            message = this.props.message;
        return (
            <div>
                <h2>Hello {name}!</h2>
                <p>{message}</p>
            </div>
        )
    }
});

module.exports = GreeterMessage;
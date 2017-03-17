const React = require('react'),
    GreeterMessage = require('GreeterMessage'),
    GreeterForm = require('GreeterForm');

let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is rendered from the Greeter component...'
        }
    },
    getInitialState: function() {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleNewState: function(state) {
        this.setState(state);
    },
    render: function() {
        let name = this.state.name,
            message = this.state.message;
        return (
            <div>
                <h1>Dynamic Component Example</h1>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewState={this.handleNewState}/>
                <hr/>
            </div>
        );
    }
});

module.exports = Greeter;
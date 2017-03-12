let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is rendered from the Greeter component...'
        }
    },
    render: function() {
        let name = this.props.name,
            message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        );
    }
});

let firstName = "Dustin",
    message = 'Welcome Creator...';

ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);
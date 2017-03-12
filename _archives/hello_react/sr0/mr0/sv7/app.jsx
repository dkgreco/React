let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is rendered from the Greeter component...'
        }
    },
    getInitialState: function() {
        return {
            name: this.props.name
        }
    },
    onSetNameAction: function(e) {
        e.preventDefault(); //Prevent the form from submitting and auto refreshing the page

        let nameReference = this.refs.name;

        //fetch name passed in by event
        let name = nameReference.value;
        if (typeof name === 'string' && name.length > 0) {
            nameReference.value = '';
            this.setState({
                name
            });
        }
    },
    render: function() {
        let name = this.state.name,
            message = this.props.message;
        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <form onSubmit={this.onSetNameAction}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
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
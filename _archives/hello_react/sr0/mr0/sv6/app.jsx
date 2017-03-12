let Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is rendered from the Greeter component...'
        }
    },
    onSetNameAction: function(e) {
        e.preventDefault(); //Prevent the form from submitting and auto refreshing the page

        //fetch name passed in by event
        let name = this.refs.name.value;
        alert(name);
    },
    render: function() {
        let name = this.props.name,
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
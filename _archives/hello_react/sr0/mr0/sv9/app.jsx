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

let GreeterForm = React.createClass({
    onFormSubmit: function(e) {
        e.preventDefault();

        let nameReference = this.refs.name;
        let name = nameReference.value;
        if (typeof name === 'string' && name.length > 0) {
            nameReference.value = '';
            this.props.onNewName(name);
        }
    },
    render: function() {
       return (
               <form onSubmit={this.onFormSubmit}>
                   <input type="text" ref="name"/>
                   <button>Set Name</button>
               </form>
       )
    }
});

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
    handleNewName: function(name) {
        this.setState({
            name: name
        });
    },
    render: function() {
        let name = this.state.name,
            message = this.props.message;
        return (
            <div>
                <h1>Dynamic Component Example</h1>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
                <hr/>
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
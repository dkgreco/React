let GreeterMessage = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Hello React Nesting...</h2>
                <p>Let's embed shall we?</p>
            </div>
        )
    }
});

let GreeterForm = React.createClass({
   render: function() {
       return (
               <form>
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
                <h1>Hardcoded Example with Dynamic Data</h1>
                <h2>Hello {name}!</h2>
                <p>{message}</p>
                <form onSubmit={this.onSetNameAction}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
                <hr/>
                <h1>Static Component Example</h1>
                <GreeterMessage/>
                <GreeterForm/>
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
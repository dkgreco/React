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
    buildStateWith: function(referenceList) {
        let nameReference = referenceList.name,
            messageReference = referenceList.message,
            nameValue = nameReference.value,
            messageValue = messageReference.value;

        //rtc acronym: Request To Change
        let rtcName = (nameValue.length > 0),
            rtcMessage = (messageValue.length > 0);

        let rtcBoth = rtcName && rtcMessage,
            state = {};

        if(rtcBoth) {
            state.name = nameValue;
            nameReference.value = '';
            state.message = messageValue;
            messageReference.value = '';
        } else if (rtcName) {
            state.name = nameValue;
            nameReference.value = '';
        } else if (rtcMessage) {
            state.message = messageValue;
            messageReference.value = '';
        }
        return state;
    },
    onFormSubmit: function(e) {
        e.preventDefault();
        let state = this.buildStateWith(this.refs);
        this.props.onNewState(state);
    },
    render: function() {
       return (
               <form onSubmit={this.onFormSubmit}>
                   <p>Set New Name:</p>
                   <input type="text" ref="name"/><br/>
                   <p>Set New Message:</p>
                   <textarea ref="message" rows="2"></textarea><br/>
                   <button>Submit</button>
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

/*let firstName = "Dustin",
    message = 'Welcome Creator...';
 name={firstName} message={message}
    */

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);
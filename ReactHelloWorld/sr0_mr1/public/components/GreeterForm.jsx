const React = require('react');

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
                <textarea ref="message" rows="2"/><br/>
                <button>Submit</button>
            </form>
        )
    }
});

module.exports = GreeterForm;
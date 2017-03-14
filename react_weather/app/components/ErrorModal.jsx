const React = require('react'),
    ReactDOM = require('react-dom'),
    ReactDOMServer = require('react-dom/server');

let ErrorModal;
ErrorModal = React.createClass({
    getDefaultProps: function() {
        "use strict";
        return {
            title: 'Something went wrong...'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        "use strict";
        let {title, message} = this.props;
        let modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>
                    {title}
                </h4>
                <p>
                    {message}
                </p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        let modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        "use strict";
        return (
            <div>
            </div>
        )
    }
});

module.exports = ErrorModal;
let Greeter = React.createClass({
    render: function() {
        //What JSX does in the background:
        return React.createElement(
            'h1',
            null,
            "Hello from createElement Method!"
        );
        /*return (
             <div>
                 <h1>Hello React sv4!</h1>
                 <p>This is rendered from the Greeter component...</p>
             </div>
         );*/
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);
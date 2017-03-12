let Greeter = React.createClass({
    render: function() {
         return (
             <div>
                 <h1>Hello React sv4!</h1>
                 <p>This is rendered from the Greeter component...</p>
             </div>
         );
    }
});

ReactDOM.render(
    <Greeter/>,
    document.getElementById('app')
);
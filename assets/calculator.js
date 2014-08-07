/** @jsx React.DOM */

var Calculator = React.createClass({
  render: function(){
    return <h1>Calculator</h1>;
  }
});

React.renderComponent(<Calculator />, document.body);

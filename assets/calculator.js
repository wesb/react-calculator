/** @jsx React.DOM */

var CalculatorDisplay = React.createClass({
  render: function(){
    return <div className='display'>{this.props.value}</div>;
  }
});

var Calculator = React.createClass({
  getInitialState: function(){
    return {displayedValue: 0};
  },
  render: function(){
    return <div className='calculator'><CalculatorDisplay value={this.state.displayedValue}/></div>;
  }
});

React.renderComponent(<Calculator />, document.body);

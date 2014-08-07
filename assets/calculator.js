/** @jsx React.DOM */

var CalculatorDisplay = React.createClass({
  render: function(){
    return <div className='display'>{this.props.value}</div>;
  }
});

var CalculatorButton = React.createClass({
  render: function(){
    return <button onClick={this.handleClick}>{this.props.value}</button>
  }
});

var Calculator = React.createClass({
  getInitialState: function(){
    return {displayedValue: 0};
  },
  render: function(){
    var buttons = this.props.buttons.map(function(buttonValue){
      return <CalculatorButton value={buttonValue} />;
    });
    return <div className='calculator'><CalculatorDisplay value={this.state.displayedValue}/><div className='buttons'>{buttons}</div></div>;
  }
});

var buttons = [
  "C", " ", " ", "÷",
  "7", "8", "9", "×",
  "4", "5", "6", "−",
  "1", "2", "3", "+",
  " ", "0", ".", "="
];

React.renderComponent(<Calculator buttons={buttons}/>, document.body);

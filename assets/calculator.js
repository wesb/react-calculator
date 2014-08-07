/** @jsx React.DOM */

var CalculatorDisplay = React.createClass({
  render: function(){
    return <div className='display'>{this.props.value}</div>;
  }
});

var CalculatorButton = React.createClass({
  handleClick: function(){
    this.props.onUserInput(this.props.value);
  },
  render: function(){
    return <button onClick={this.handleClick}>{this.props.value}</button>
  }
});

var Calculator = React.createClass({
  getInitialState: function(){
    return {displayedValue: 0};
  },
  handleUserInput: function(label){
    if(!isNaN(parseFloat(label))){
      // It's a number so lets just append that to the display value
      currentValue = this.state.displayedValue == '0' ? '' : this.state.displayedValue;
      this.setState({displayedValue: currentValue += label});
    }else{
      // It's not a number, so lets figure out what we need to do
      switch(label){
        case 'C':
          this.setState({displayedValue: '0'});
          break;
      }
    }

  },
  render: function(){
    var onUserInputCallback = this.handleUserInput;
    var buttons = this.props.buttons.map(function(buttonValue){
      return <CalculatorButton value={buttonValue} onUserInput={onUserInputCallback} />;
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

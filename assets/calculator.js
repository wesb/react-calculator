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
    return <button onClick={this.handleClick} className={this.props.active ? 'active' : ''}>{this.props.value}</button>
  }
});

var Calculator = React.createClass({
  getInitialState: function(){
    return {displayedValue: '0', storedValue: '0', activeOperator: null};
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
          this.setState({displayedValue: '0', storedValue: '0', activeOperator: null});
          break;
        case '÷':
        case '×':
        case '−':
        case '+':
          this.setState({displayedValue: '0', storedValue: this.state.displayedValue, activeOperator: label});
          break;
        case '=':
          value1 = parseFloat(this.state.storedValue);
          value2 = parseFloat(this.state.displayedValue);
          output = value2;
          switch(this.state.activeOperator){
            case '÷':
              var output = value1 / value2;
              break;
            case '×':
              var output = value1 * value2;
              break;
            case '−':
              var output = value1 - value2;
              break;
            case '+':
              var output = value1 + value2;
              break;
          }
          this.setState({displayedValue: output, storedValue: '0', activeOperator: null});
      }
    }
  },
  render: function(){
    var buttons = this.props.buttons.map(function(buttonValue){
      var active = this.state.activeOperator == buttonValue;
      return <CalculatorButton value={buttonValue} onUserInput={this.handleUserInput} active={active} />;
    }, this);
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

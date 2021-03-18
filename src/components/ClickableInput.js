import React from 'react';

class ClickableInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInputOn: false,
    };
  }

  handleClick = () => {
    this.setState({ isInputOn: true });
  };

  changeInputToLabel = () => {
    this.setState({ isInputOn: false });
  };

  handleEnter = (e) => {
    if (this.props.input.type === 'textarea') return;
    if (e.key === 'Enter') this.changeInputToLabel();
  };

  render() {
    const InputType = this.props.input.type || 'input';
    return this.state.isInputOn ? (
      <InputType
        type="text"
        value={this.props.input.text}
        onChange={(e) => this.props.handleChange(this.props.jobIndex, e)}
        onBlur={this.changeInputToLabel}
        onKeyDown={this.handleEnter}
        autoFocus={true}
        name={this.props.input.name}
      ></InputType>
    ) : (
      <this.props.input.tag onClick={this.handleClick}>
        {this.props.input.text || this.props.input.default}
      </this.props.input.tag>
    );
  }
}

export default ClickableInput;

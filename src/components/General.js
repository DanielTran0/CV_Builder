import React from 'react';
import ClickableInput from './ClickableInput';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        name: 'name',
        text: 'Full Name',
        default: 'Full Name',
        tag: 'h1',
      },
      address: {
        name: 'address',
        text: 'City, State',
        default: 'City, State',
        tag: 'p',
      },
      phone: {
        name: 'phone',
        text: 'Phone Number',
        default: 'Phone Number',
        tag: 'p',
      },
      email: { name: 'email', text: 'Email', default: 'Email', tag: 'p' },
      extra: {
        name: 'extra',
        text: 'LinkedIn / Portfolio / GitHub',
        default: 'LinkedIn / Portfolio / GitHub',
        tag: 'p',
      },
    };
  }

  handleChange = (id, e) => {
    const { name, value } = e.target;
    this.setState({ [name]: { ...this.state[name], text: value } });
  };

  render() {
    return (
      <div className="general">
        <ClickableInput
          input={this.state.name}
          handleChange={this.handleChange}
        />
        <div className="generalDetails">
          <ClickableInput
            input={this.state.address}
            handleChange={this.handleChange}
          />
          <span>|</span>
          <ClickableInput
            input={this.state.phone}
            handleChange={this.handleChange}
          />
          <span>|</span>
          <ClickableInput
            input={this.state.email}
            handleChange={this.handleChange}
          />
          <span>|</span>
          <ClickableInput
            input={this.state.extra}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default General;

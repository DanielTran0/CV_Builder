import React from 'react';
import ClickableInput from './ClickableInput';

class WorkInputs extends React.Component {
  render() {
    return (
      <div className="job">
        <div className="companyHeader">
          <ClickableInput
            input={this.props.input.position}
            id={this.props.input.id}
            handleChange={this.props.handleChange}
            jobIndex={this.props.jobIndex}
          />
          <div className="companyDate">
            <ClickableInput
              input={this.props.input.start}
              handleChange={this.props.handleChange}
              jobIndex={this.props.jobIndex}
            />
            <span>-</span>
            <ClickableInput
              input={this.props.input.end}
              handleChange={this.props.handleChange}
              jobIndex={this.props.jobIndex}
            />
          </div>
        </div>
        <div className="companyDetails">
          <ClickableInput
            input={this.props.input.company}
            handleChange={this.props.handleChange}
            jobIndex={this.props.jobIndex}
          />
          <span>-</span>
          <ClickableInput
            input={this.props.input.address}
            handleChange={this.props.handleChange}
            jobIndex={this.props.jobIndex}
          />
        </div>
        <ClickableInput
          input={this.props.input.details}
          handleChange={this.props.handleChange}
          jobIndex={this.props.jobIndex}
        />
        <button
          type="button"
          onClick={() => this.props.handleDelete(this.props.input.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default WorkInputs;

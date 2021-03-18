import React from 'react';
import EducationInputs from './EducationInputs';
import uniqid from 'uniqid';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      default: {
        id: uniqid(),
        degree: {
          name: 'degree',
          text: 'Degree and Field',
          default: 'Degree and Field',
          tag: 'h2',
        },
        start: {
          name: 'start',
          text: 'Start Date (Month Year)',
          default: 'Start Date (Month Year)',
          tag: 'p',
        },
        end: {
          name: 'end',
          text: 'End Date / Present',
          default: 'End Date / Present',
          tag: 'p',
        },
        school: {
          name: 'school',
          text: 'School Name',
          default: 'School Name',
          tag: 'p',
        },
        address: {
          name: 'address',
          text: 'City, State',
          default: 'City, State',
          tag: 'p',
        },
        details: {
          name: 'details',
          text: 'Description - 2 or 3 Achievements',
          default: 'Description - 2 or 3 Achievements',
          tag: 'pre',
          type: 'textarea',
        },
      },
    };
  }

  resetDefault = () => {
    this.setState({
      default: {
        id: uniqid(),
        degree: {
          name: 'degree',
          text: 'Degree and Field',
          default: 'Degree and Field',
          tag: 'h2',
        },
        start: {
          name: 'start',
          text: 'Start Date (Month Year)',
          default: 'Start Date (Month Year)',
          tag: 'p',
        },
        end: {
          name: 'end',
          text: 'End Date / Present',
          default: 'End Date / Present',
          tag: 'p',
        },
        school: {
          name: 'school',
          text: 'School Name',
          default: 'School Name',
          tag: 'p',
        },
        address: {
          name: 'address',
          text: 'City, State',
          default: 'City, State',
          tag: 'p',
        },
        details: {
          name: 'details',
          text: 'Description - 2 or 3 Achievements',
          default: 'Description - 2 or 3 Achievements',
          tag: 'pre',
          type: 'textarea',
        },
      },
    });
  };

  handleAdd = () => {
    this.setState((prevState) => {
      return { jobs: [...prevState.jobs, prevState.default] };
    });
    this.resetDefault();
  };

  handleChange = (jobIndex, e) => {
    const { name, value } = e.target;

    this.setState((prevState) => {
      const updatedJobs = [...prevState.jobs];
      updatedJobs[jobIndex][name].text = value;
      return { jobs: updatedJobs };
    });
  };

  handleDelete = (jobId) => {
    const removedJob = this.state.jobs.filter((job) => {
      return job.id !== jobId;
    });
    this.setState({ jobs: removedJob });
  };

  dataToLabel = () => {
    return this.state.jobs.map((label, index) => {
      return (
        <EducationInputs
          key={label.id}
          input={label}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          jobIndex={index}
        />
      );
    });
  };

  render() {
    return (
      <div className="work">
        <h1>Education</h1>
        {this.dataToLabel()}
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default Work;

import React, {Component} from 'react';

class EventInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('form submitted: ');
    event.preventDefault();
  }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Type of Cause:
            <input type="text" name="type" />
          </label>
          <label>
            Organization Name:
            <input type="text" name="orgName" />
          </label>
          <label>
            Event Name:
            <input type="text" name="eventName" />
          </label>
          <label>
            Start Time:
            <input type="time" name="startTime" />
            End Time:
            <input type="time" name="endTime" />
          </label>
          <label>
            Location:
            <input type="text" name="location" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
    }
}

export default EventInfoForm

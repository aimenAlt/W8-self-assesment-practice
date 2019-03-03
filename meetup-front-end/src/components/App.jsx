import React from 'react';
import Registration from './Registration.jsx';
import Attendants from './Attendants.jsx';

class App extends React.Component {
// YOUR CODE HERE
  constructor(props) {
    super(props);
    this.state = {
      formData: {     
        firstName: "",
        lastName: "",
        email: "",
        shirt: "",
        experience: "",
      },
      attendees: {
        beginners: [],
        intermediates: [],
        experts: [],
      }
    }

  }

  render() {
    const { formData, attendees } = this.state;
    return (
      <div className="main">
        <Registration formData={formData} />
        <Attendants />
      </div>
    );
  }

}

export default App;

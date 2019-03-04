import React from 'react';
import Registration from './Registration.jsx';
import Attendants from './Attendants.jsx';
import PopUp from './popUp.jsx';

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
        skillLevel: "",
        id: 0,
      },
      attendees: {
        beginners: [],
        intermediates: [],
        experts: [],
      },
      editorOpen: false,
      idSelected: {     
        firstName: "",
        lastName: "",
        email: "",
        shirt: "",
        skillLevel: "",
        id: 0,
      },
    }
    this.formUpdater = this.formUpdater.bind(this);
    this.formSend = this.formSend.bind(this);
    this.sorter = this.sorter.bind(this);
    this.editor = this.editor.bind(this);
    this.closePop = this.closePop.bind(this);
    this.attendentUpdater = this.attendentUpdater.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.editorUpdater = this.editorUpdater.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      attendees: {
        beginners: [],
        intermediates: [],
        experts: [],
      }
    });
    fetch('/attendees').then((data) => data.json()).then((data) => {
      return data.map(value => this.sorter(value));
    });
  }

  formUpdater(event) {
    let theState = this.state;
    theState.formData[event.target.getAttribute("id")] = event.target.value;
    this.setState(theState);
  }

  sorter(attendant) {
    var attendeesObj = this.state.attendees;
    if (attendant.skillLevel === "Expert" || attendant.skillLevel === "expert") attendeesObj.experts.push(attendant);
    else if (attendant.skillLevel === "Intermediate" || attendant.skillLevel === "intermediate") attendeesObj.intermediates.push(attendant);
    else attendeesObj.beginners.push(attendant);
    this.setState({
      attendees: attendeesObj,
    })
  }

  formSend() {
    fetch("http://localhost:3000/attendees", {
      method: "POST",
      body: JSON.stringify(this.state.formData),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then((data) => data.json()).then(data => {
      this.sorter(data)
    })
  }

  editor(id, event) {
    let attendantAll = this.state.attendees;
    let attendentArr = attendantAll.beginners.concat(attendantAll.intermediates, attendantAll.experts);
    let attendentSelected = attendentArr.find((element) => {
      return element.id === id;
    });
    this.setState({
      editorOpen: true,
      idSelected: attendentSelected,
    })
  }

  closePop() {
    this.setState({
      editorOpen: false,
    });
  }

  editorUpdater(event) {
    let theState = this.state;
    theState.idSelected[event.target.getAttribute("id")] = event.target.value;
    this.setState(theState);
  }

  attendentUpdater() {
    fetch(`http://localhost:3000/attendees/${this.state.idSelected.id}`, {
      method: "PUT",
      body: JSON.stringify(this.state.idSelected),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(() => {
      this.fetchData();
    })
  }

  render() {
    const { formData, attendees, idSelected, editorOpen} = this.state;
    return (
      <div className="main">
        <Registration formData={formData} formUpdater={this.formUpdater} formSend={this.formSend} />
        <Attendants attendees={attendees} editor={this.editor} />
        {
          editorOpen ? 
            <PopUp 
              edit={this.attendentUpdater} 
              idSelected={idSelected} 
              closePop={this.closePop} 
              editorUpdater={this.editorUpdater} 
            /> 
          : null
        }
      </div>
    );
  }

}

export default App;

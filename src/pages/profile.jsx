import React from "react";
import Footer from "./../components/footer/footer";
import TopMenu from "../components/top-menu/top-menu";

class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Age:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Gender:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default Profile;
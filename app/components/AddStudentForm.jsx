import React ,{Component} from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


export default class AddStudentForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      studentName: "",
      studentEmail: "",
      studentGender: "",
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleName(event) {
    this.setState({
      studentName: event.target.value
    })
  }

  handleEmail (event) {
    this.setState({
      studentEmail: event.target.value
    })
  }

  handleGender (event) {
    const holder = event.target.value
    console.log(holder, "HOLDER")
    this.setState({
      studentGender: holder
    })
  }

  handleSubmit (evt) {
    evt.preventDefault();
    this.props.add({
      name: this.state.studentName,
      email: this.state.studentEmail,
      Gender: this.state.studentGender,
    });
    this.setState({
      studentName: "",
      studentEmail: "",
      studentGender: "",
    });
  }
    render(){

      console.log(this.state.studentGender, "STUDENT GENDER")

      return (
        <div >
          <form style ={{marginTop: "100px"}} className="form-horizontal" onSubmit = {this.handleSubmit}>
            <legend>New Student </legend>
            <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-5">
              <input className="form-control" type="text" placeholder = "Enter Name" onChange = {this.handleName}  value={this.state.studentName} />
              <input className="form-control" type="text" placeholder = "Enter Email" onChange = {this.handleEmail}  value={this.state.studentEmail} />
              <select onChange = {this.handleGender}  value={this.state.studentGender} >
                  <option value={null}>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
              </select>
              </div>

            </div>
            <div className="form-group">
            <div className="col-xs-8 col-xs-offset-2">
              <button type="submit" id="submit-btn" className="btn btn-success" >Create Student</button>
            </div>

           </div>
         </form>
       </div>
      )
    }
}

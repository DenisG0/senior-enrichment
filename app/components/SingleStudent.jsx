import React, {Component} from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(){
    super()
    this.state = {
      student: {},
      campus: {},
      allCampus: [],
      needEdit: true,
      studentName: '',
      studentEmail: "",
      studentGender: "",
      studentCampusId: 0,
    }
    this.edit = this.edit.bind(this)
    this.handleNames = this.handleNames.bind(this);
    this.handleGenders = this.handleGenders.bind(this);
    this.handleEmails = this.handleEmails.bind(this);
    this.handleCampuss = this.handleCampuss.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
        const userId = this.props.match.params.userId
        axios.get(`/api/user/${userId}`)
        .then(res => res.data)
        .then(student => {
          const Campus = student.campus
          this.setState({
            student: student,
            campus: Campus })
        })
        axios.get(`/api/campus`)
        .then(res => res.data)
        .then(campus => {
          this.setState({
            allCampus: campus })
        })
  }

 //**************************/Edit to handle Toggling between default and edit screen.

  edit(){
    if (this.state.needEdit){
      this.setState({
        needEdit: false
      })
    } else {
    this.setState({
      needEdit: true
    })
   }
  }

  //************************************/Handle Change Functions

  handleNames(event) {
    this.setState({
      studentName: event.target.value
    })
  }

  handleGenders(event) {
    this.setState({
      studentGender: event.target.value
    })
  }

  handleEmails(event) {
    this.setState({
      studentEmail: event.target.value
    })
  }

  handleCampuss(event) {
    const campus = event.target.value
    const campusId = this.state.allCampus.filter((campusObj) => {
      return campusObj.name ===campus
    })[0].id
    console.log(campus, "CAMPUS UPDATE")
    this.setState({
      studentCampusId: campusId,
    })
  }

  handleSubmit (evt) {
    const UserId = this.props.match.params.userId
    evt.preventDefault();
    axios.put( `/api/user/${UserId}`, {
      name: this.state.studentName,
      email: this.state.studentEmail,
      Gender: this.state.studentGender,
      campusId: this.state.studentCampusId,
    })
    .then( () => {
        this.setState({
        needEdit: true,
        student: {
          name: this.state.studentName,
          email: this.state.studentEmail,
          Gender: this.state.studentGender,
          campusId: this.state.studentCampusId,
        }
      })})
  }

//******************************************/RENDER/************************* */

  render(){

      const campus = this.state.campus
      const AllCampus = this.state.allCampus
      const backgroundImage = campus ? campus.image : undefined
      console.log(this.state, "CURRENT STATE")

      var background = {
        "backgroundImage": "url("+ backgroundImage +")",
        "backgroundSize": "100%"
      }
      var style = {
        'marginLeft':'100px'
      }

      var stylin = {
        'marginTop':'20px',
        'float':'middle'
      }

    if (this.state.needEdit){ //************************** */ Showing the Page as is

    return (
          <div className="jumbotron" style = { campus ? background : undefined }  >
            <div >
                <div style ={style}>
                <div><h4>Student Name: </h4>
                {this.state.student.name}
                </div>
                <div><h4> Student Gender:</h4>{this.state.student.Gender}
                </div>
                <div><h4> Student Email:</h4>{this.state.student.email}
                </div>
                <div><h4>Student Campus:</h4>{ campus ? campus.name : "Unassigned" }
                </div>
                   <button type="button" className="btn btn-primary" style ={stylin} onClick = {this.edit} >Edit</button>
                </div>
            </div>
        </div>
    )}
    else {   //**************************************/ Showing the Page for Edit

      return (
        <div className="jumbotron" style = { campus ? background : undefined }  >
          <form onSubmit = {this.handleSubmit}>
                <div style ={style}>
                <div><h6> Previous Name: {this.state.student.name} </h6>
                <input className="form" type="text" placeholder = "Enter Name" onChange = {this.handleNames} defaultValue = {this.state.student.name} />
                </div>
                <div><h6>Previous Gender: {this.state.student.Gender}</h6>
                    <select onChange = {this.handleGenders}value={this.state.studentGenders} >
                          <option value={null}>Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                    </select>
                </div>
                <div><h6>Previous Email: {this.state.student.email} </h6>
                     <input className="form" type="text" placeholder = "Enter Email" onChange = {this.handleEmails} defaultValue = {this.state.student.email} />
                </div>
                <div><h6>Previous Campus: {campus ? campus.name : "Unassigned"}</h6>
                  <select onChange = {this.handleCampuss} value= {this.state.studentCampuss} >
                          <option value={null}>Select </option>
                          {
                            AllCampus.map( eachCampus =>
                                <option value= {eachCampus.name} key={eachCampus.id} >{eachCampus.name}</option>
                            )
                          }
                  </select>
                </div>
                  <button type="submit" id="submit-btn" className="btn btn-primary" style ={stylin}>Finish Edit</button>
                </div>
          </form>
        </div>
      )
    }
  }
}

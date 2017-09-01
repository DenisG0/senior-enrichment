import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddStudentForm from './AddStudentForm';


export default class SinglePlanet extends Component {

  constructor(){
    super()
    this.state = {
      campus: {},
      student: [],
      unEdit: true,
      planetName: '',
      planetImage: ''
    }
    this.edit = this.edit.bind(this);
    this.addStudents = this.addStudents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
   }

    componentDidMount(){
      const CampusId = this.props.match.params.campusId
      axios.get(`/api/campus/${CampusId}`)
      .then(res => res.data)
      .then(planet => {
        this.setState({
        campus: planet,
        student: planet.users })
      })
    }

//************************** Addstudents function to be passed as props into addstudentform component

    addStudents(event){
      axios.post('/api/user', {
        name: event.name,
        email: event.email,
        Gender: event.Gender,
        campusId: this.state.campus.id
      })
      .then(res => res.data)
      .then(student => {
          this.setState({
            student:[...this.state.student, student]
          })
      })
    }

 //**************************Edit to handle Toggling between default and edit screen.
    edit(event){
      event.preventDefault();
      if (this.state.unEdit){
        this.setState({
          unEdit: false
        })
      } else {
      this.setState({
        unEdit: true
      })
     }
    }

  //***********************************************************Handle Change Request

    handleClick (){
      axios.delete(`/api/campus/${this.state.campus.id}`)
      .then((data) => {
        console.log(data)
       }
      )
    }
    handleDelete (Id) {
      return () => {
      axios.delete(`/api/user/${Id}`)
      .then(() => {
        this.forceUpdate();
       }
      )
    }
  }

    handleName (event){
      this.setState({
        planetName: event.target.value
      })
    }

    handleImage (event){
      this.setState({
        planetImage: event.target.value
      })
    }

    handleSubmit (evt) {
      const CampusId = this.props.match.params.campusId
      evt.preventDefault();
      console.log(CampusId, "CampusId")
      axios.put( `/api/campus/${CampusId}`, {
        name: this.state.planetName,
        image: this.state.planetImage,
      })
      .then( () => {
          this.setState({
          unEdit: true,
          campus: {
            name: this.state.planetName,
            image: this.state.planetImage,
          }
        })})
    }


render(){

      const students = this.state.student

      const style = {
        'float' : 'right',
        'marginTop': '20px',
        'marginRight':'20px'
      }

      const stylin = {
        'marginLeft': '20px'
      }

      var background = {
        "backgroundImage": "url(" + this.state.campus.image + ")",
        "backgroundSize": "100%"
      }

      var top = {
        'marginTop': "20px"
      }

     if (this.state.unEdit) {  //******************************* */ Showing the Page as is
         return (
           <div>
                <div style = {background}>
                   <a href="#" className="btn btn-primary btn-xs" style = {style} onClick = {this.edit}  >Edit</a>
                  <h1 style = {stylin}>{this.state.campus.name}</h1>
                </div>
           <div>
            <table className= 'table'>
                  <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    </tr>
                  </thead>
            <tbody>
               {
                  students.map(user => (

                    <tr key={user.id}>
                     <td>
                      <Link to = {`/user/${user.id}`}>
                      <h4>{ user.name }</h4>
                      </Link>
                     </td>
                     <td>
                     <h4>{ user.email }</h4>
                     </td>
                     <td>
                     <h4>{ user.Gender }</h4>
                     </td>
                     <td>
                     <a href="#" className="btn btn-danger" onClick = {this.handleDelete(user.id)} >Expell</a>
                     </td>
                     </tr>
                     ))
                 }
            </tbody>
            </table>
            <AddStudentForm add = {this.addStudents} />
            <a href="#" className="btn btn-default btn-lg btn-block" onClick = {this.handleClick}>CLOSE SCHOOL DOWN</a>
             </div>
            </div>
          )}
           else { //*********************************************/ Showing the Page for Edit

            return (
            <form onSubmit = {this.handleSubmit} style = {stylin}>
                <div>
                 <h5> Previous Campus Name: {this.state.campus.name} </h5>
                 <input className = "form-group" type = "text" placeholder = "Enter New Name" onChange = {this.handleName} value = {this.state.planetName} />
                 </div>
                 <div>
                 <h5> Previous Image Coordinates : {this.state.campus.image} </h5>
                 <input className="form-control" type="text" placeholder = "Enter New Image Coordinates" onChange = {this.handleImage} value = {this.state.planetImage} />
                 </div>
                 <button className="btn btn-primary btn-lg" type="submit" id="submit-btn" style = {top} >Submit</button>
             </form>
            )}
     }
}

import React ,{Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import AddStudentForm from './AddstudentForm';


export default class SinglePlanet extends Component {

  constructor(){
    super()
    this.state = {
      campus: {},
      student: [],
    }
    this.addStudents = this.addStudents.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
   }

    componentDidMount(){
      const planetId = this.props.match.params.planetId
      axios.get(`/api/campus/${planetId}`)
      .then(res => res.data)
      .then(planet => {
        this.setState({
        campus: planet,
        student: planet.users })
      })
    }

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
    render(){

      const students = this.state.student

      var background = {
        "backgroundImage": "url("+ this.state.campus.image +")",
        "backgroundSize": "100%"
      }

      return (
       <div>
        <div style= {background}>
          <h1>{this.state.campus.name}</h1>
        </div>
        <table className='table'>
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
      )
   }

}

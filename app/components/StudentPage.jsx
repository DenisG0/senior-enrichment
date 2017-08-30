import React ,{Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import AddStudentForm from './AddStudentForm';

export default class SinglePlaylist extends Component {

  constructor () {
    super();
    this.state = {
      student: []
    }
  this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    axios.get(`/api/user`)
    .then(res => res.data)
    .then(students => {
      this.setState({
        student: students
      })
    })
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

    const users = this.state.student

        return (
          <table className='table'>
          <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Campus</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
              {
                users.map(user => (
                  <tr key={user.id}>
                     <td>
                     <Link to = {`./user/${user.id}`}>
                      <h5>{ user.name }</h5>
                     </Link>
                     </td>
                     <td>
                     <h5>{ user.email }</h5>
                   </td>
                     <td>
                     <h5>{ user.Gender }</h5>
                     </td>
                      <td>
                      <Link to = {`./planet/${user.campus.id}`}>
                      <h5>{ user.campus.name }</h5>
                      </Link>
                    </td>
                     <td>
                     <a href="#" className="btn btn-danger" onClick = {this.handleDelete(user.id)}  >Expell</a>
                    </td>
                  </tr>
                ))
              }
            </tbody>
            </table>
    )
  }

}

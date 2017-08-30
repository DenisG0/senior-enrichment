import React ,{Component} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor(){
    super()
    this.state = {
      student: {}
    }
  }

  componentDidMount(){
    const userId = this.props.match.params.userId
    axios.get(`/api/user/${userId}`)
    .then(res => res.data)
    .then(student => {
      this.setState({
          student
      })
    })
  }

  render(){

    return (

      <div>
          <h1>{this.state.student.name}</h1>
      </div>
    )

  }

}

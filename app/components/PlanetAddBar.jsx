import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class PlanetAddBar  extends Component {

  constructor(props){
    super(props)
    this.state = {
      planetName: "",
      planetImage: ""
    }
    this.handleplanet = this.handleplanet.bind(this)
    this.handleimage = this.handleimage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleplanet(event) {
    this.setState({
      planetName: event.target.value
    })
  }

  handleimage (event) {
    this.setState({
      planetImage: event.target.value
    })
  }

handleSubmit (evt) {
  evt.preventDefault();
  this.props.add({
    name: this.state.planetName,
    image: this.state.planetImage
  });
  this.setState({
      planetName: '',
      planetImage: ''
    })
}

  render(){


  return (

    <nav className="navbar navbar-inverse">
    <div className="container-fluid-center" >
      <div className="navbar-footer">
        <a className="navbar-brand" href="#">New Planet?</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">

        <form className="navbar-form navbar-middle" role="submit" onSubmit = {this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Planet Name"
            onChange = {this.handleplanet}  value={this.state.planetName} />
            <input type="text" className="form-control" placeholder="Image Coordinates"
            onChange = {this.handleimage}  value={this.state.planetImage} />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </nav>

  )}
}


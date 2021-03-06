import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlanetAddBar from './PlanetAddBar'

export default class Planets extends Component {

  constructor () {
    super();
    this.state = {
      Planets: []
     }
     this.addPlanet = this.addPlanet.bind(this);
   }


  componentDidMount(){
    axios.get('/api/campus')
    .then(res => res.data)
    .then(Planets => this.setState({Planets}))
  }

  addPlanet(event) {
    console.log(event, "EVENT")
    axios.post('/api/campus', {
        name: event.name,
        image: event.image
      })
      .then(res => res.data)
      .then(campus => {
          this.setState({
            Planets: [...this.state.Planets, campus]
          })
      });
  }

  render(){

    const Planet = this.state.Planets
    console.log(Planet, "PLANETS")
    const style = {
      'marginLeft':'50px'
    }

      return (

        <div>
        {
        Planet.map( campus => {
           var background = {
              "backgroundImage": "url("+ campus.image +")",
              "backgroundSize": "100%"
          }
          return (
            <div className = "jumbotron" key={campus.id} style={background} >
            <div style={style}>
            <h1>{campus.name}</h1>
            <p><Link to={`/campus/${campus.id}`}><a className="btn btn-primary btn-lg" onClick = {this.handClick}  >Learn more</a></Link></p>
            </div>
            </div>
            )})
         }
        <PlanetAddBar add= {this.addPlanet} />
       </div>


    )
  }
}


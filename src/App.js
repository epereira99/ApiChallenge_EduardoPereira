import './App.css';
import Header from './components/Header';
import { Component } from 'react';
import SuperHeros from './components/SuperHeros';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


const API_KEY = "6782590228482692";

class App extends Component  {

  state = {
    superHeros: [],
    performedSearch: false
  }

  //getSuperHero calls the API to get the results of the search
  getSuperHero = async (e) => {
    if (e != undefined) {
      this.superHeroName = e.target.elements.superHeroName.value;
      e.preventDefault();
    }
    
    const api_call = await fetch(`
    https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${API_KEY}/search/${this.superHeroName}`);
    const data = await api_call.json();
    this.setState({superHeros: data.results, performedSearch: true})
  }
  //If we search in a superHeroDetail page we get the superhero searched here
  superHeroName = new URLSearchParams(this.props.location.search).get("search");

  render(){
    if (this.superHeroName != undefined && this.state.performedSearch == false) this.getSuperHero();
    return (
      <div className="App">
        <Header getSuperHero = {this.getSuperHero} superHeroName = {this.superHeroName}/>
        <SuperHeros superHeros = {this.state.superHeros}/> {/* We pass the array resultante of the search ti the SuperHeros component */}
      </div>
    );
  }
}

export default withRouter(App);

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain,
        faGaugeSimple,
        faShieldBlank,
        faDumbbell,
        faBolt,
        faHandFist
 } from "@fortawesome/free-solid-svg-icons"
import Header from './Header';


const API_KEY = "6782590228482692";

class SuperHeroDetails extends React.Component {

    state = {
        activeSuperHero: [],
        show: 1
    }

    //When we search we push a link with the superHero searched so we can get it in the app.js file
    getSuperHero = async (e) => {
        const superHeroName = e.target.elements.superHeroName.value;
        e.preventDefault();
        this.props.history.push("/?search=" + superHeroName);
      }

    // WE MAKE A API CALL TO GET THE INFORMATION OF THE HERO THAT WAS SELECTED BASED ON ITS ID
    componentDidMount = async () => {
        const superHeroID = this.props.match.params.id;
        const request = await fetch(`
        https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${API_KEY}/${superHeroID}`);

        const response = await request.json();
        this.setState({ activeSuperHero: response })
    }
    
    render() {
        
        return(
            <div>
                <Header getSuperHero = {this.getSuperHero}/>
                <div className="grid grid-cols-4">
                    <div></div>
                    <div className="mt-10 bg- flex rounded-t-[18px] bg-gradient-to-r from-gray-900 to-gray-700 rounded-3xl col-span-2">
                        <div className="cardDetail  max-w-[201px] "  >
                            <div>
                                <img className="card-image" 
                                    src={this.state.activeSuperHero.image ? this.state.activeSuperHero.image.url : ""} 
                                    alt={this.state.activeSuperHero.name}/>
                            </div>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-700 ">
                                    <h5 className="text-white font-mono text-xl font-bold mt-1"> { this.state.activeSuperHero.name } </h5>
                                    <p className="text-white font-mono text-sm"> Publisher: <span>
                                    { this.state.activeSuperHero.biography? this.state.activeSuperHero.biography.publisher : "" } 
                                        </span></p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2">
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faHandFist } />
                                    <text className="ml-1 font-mono font-bold text-xl"> { this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.combat: "" }</text>
                                </div>
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faShieldBlank } />
                                    <text className="ml-1 font-mono font-bold text-xl"> { this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.durability: "" }</text>
                                </div>
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faBrain } />
                                    <text className="ml-1 font-mono font-bold text-xl"> { this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.intelligence: "" }</text>
                                </div>
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faBolt } />
                                    <text className="ml-1 font-mono font-bold text-xl"> { this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.power: "" }</text>
                                </div>
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faGaugeSimple } />
                                    <text className="ml-1 font-mono font-bold text-xl"> { this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.speed: "" }</text>
                                </div>
                                <div className=" self-center">
                                    <FontAwesomeIcon icon={ faDumbbell } />
                                    <text className="ml-1 font-mono font-bold text-xl">{ this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.strength: "" }</text>
                                </div>

                            </div>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-rows-1 grid-cols-5 h-[40px] bg-gradient-to-r from-cyan-900 to-cyan-700  font-mono text-lg ">
                                <div className="cursor-pointer border-2 rounded-md border-slate-900" onClick={() => this.setState({ show: 1 })}>
                                    <h1 className="text-center mt-[5px] text-white">Biography</h1>
                                </div>
                                <div className="cursor-pointer border-r-2 border-t-2 border-b-2 rounded-md border-slate-900" onClick={() => this.setState({ show: 2 })}>
                                    <h1 className="text-center mt-[5px] text-white">Apperance</h1>
                                </div>
                                <div className="cursor-pointer border-r-2 border-t-2 border-b-2 rounded-md border-slate-900" onClick={() => this.setState({ show: 3 })}>
                                    <h1 className="text-center mt-[5px] text-white">Connections</h1>
                                </div>
                                <div className="cursor-pointer border-r-2 border-t-2 border-b-2 rounded-md border-slate-900" onClick={() => this.setState({ show: 4 })}>
                                    <h1 className="text-center mt-[5px] text-white">Powerstats</h1>
                                </div>
                                <div className="cursor-pointer border-r-2 border-t-2 border-b-2 rounded-md border-slate-900" onClick={() => this.setState({ show: 5 })}>
                                    <h1 className="text-center mt-[5px] text-white">Work</h1>
                                </div>
                                
                            </div>

                                {/* DEPENDING ON THE SECTION SELECTED WE SHOW DIFERENT INFORMATION */}
                                {this.state.show==1?
                                    <div className="mt-10 ml-10 font-mono text-lg ">
                                        <h1 className="text-white ">Full Name: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography['full-name'] : ""}</h1>
                                        <h1 className="text-white mt-2">Alter Egos: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography['alter-egos']: ""}</h1>
                                        <h1 className="text-white mt-2">Place of birth: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography['place-of-birth']: ""}</h1>
                                        <h1 className="text-white mt-2">First apperance: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography['first-appearance']: ""}</h1>
                                        <h1 className="text-white mt-2">Publisher: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography['full-name']: ""}</h1>
                                        <h1 className="text-white mt-2">Alieses: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography.aliases: ""}</h1>
                                        <h1 className="text-white mt-2">Alignment: {this.state.activeSuperHero.biography? this.state.activeSuperHero.biography.alignment: ""}</h1>
                                    </div>:
                                this.state.show==2?
                                    <div className="mt-10 ml-10 font-mono text-lg ">
                                        <h1 className="text-white ">Race: Human{this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance.race: ""}</h1>
                                        <h1 className="text-white mt-2">Gender: {this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance.gender: ""}</h1>
                                        <h1 className="text-white mt-2">Height: {this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance.height: ""}</h1>
                                        <h1 className="text-white mt-2">Weight: {this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance.weight: ""}</h1>
                                        <h1 className="text-white mt-2">Eye color: {this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance['eye-color']: ""}</h1>
                                        <h1 className="text-white mt-2">Hair color: {this.state.activeSuperHero.appearance? this.state.activeSuperHero.appearance['hair-color']: ""}</h1>
                                    </div>:
                                this.state.show==3?
                                    <div className="mt-10 ml-10 font-mono text-lg ">
                                        <h1 className="text-white ">Group affiliation: {this.state.activeSuperHero.connections? this.state.activeSuperHero.connections['group-affiliation']: ""}</h1>
                                        <h1 className="text-white mt-2">Relatives: {this.state.activeSuperHero.connections? this.state.activeSuperHero.connections.relatives: ""}</h1>
                                    </div>:
                                this.state.show==4?
                                    <div className="mt-10 ml-10 font-mono text-lg ">
                                        <h1 className="text-white ">Combat: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.combat: ""}</h1>
                                        <h1 className="text-white mt-2">Durability: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.durability: ""}</h1>
                                        <h1 className="text-white mt-2">Intelligence: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.intelligence: ""}</h1>
                                        <h1 className="text-white mt-2">Power: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.power: ""}</h1>
                                        <h1 className="text-white mt-2">Speed: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.speed: ""}</h1>
                                        <h1 className="text-white mt-2">Strenght: {this.state.activeSuperHero.powerstats? this.state.activeSuperHero.powerstats.strength: ""}</h1> 
                                    </div>: 
                                this.state.show==5?
                                    <div className="mt-10 ml-10 font-mono text-lg ">
                                        <h1 className="text-white ">Base: {this.state.activeSuperHero.work? this.state.activeSuperHero.work.base: ""}</h1>
                                        <h1 className="text-white mt-2">Occupation: {this.state.activeSuperHero.work? this.state.activeSuperHero.work.occupation: ""}</h1>
                                    </div>:null
                                }
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default SuperHeroDetails
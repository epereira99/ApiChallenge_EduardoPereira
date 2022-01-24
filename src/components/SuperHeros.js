import React from "react";
import { Link } from"react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain,
        faGaugeSimple,
        faShieldBlank,
        faDumbbell,
        faBolt,
        faHandFist
 } from "@fortawesome/free-solid-svg-icons"


function SuperHeros(props) {
    return (
        <div className="grid grid-cols-3">
            <div></div>
            <div className="container">
                <div className="grid grid-cols-3 grid-rows-3 gap-4 absolute ">
                    { props.superHeros.map((superHero) => {
                        return (
                            <Link key={ superHero.id } to={{pathname: `/SuperHeroDetails/${superHero.id}`,
                                    state: {superHero: superHero.id}}} >

                                <div className="card " >
                                    <div>
                                        <img className="card-image" 
                                            src={superHero.image.url} 
                                            alt={superHero.name}/>
                                    </div>
                                    <div className="bg-gradient-to-r from-gray-900 to-gray-700 ">
                                            <h5 className="text-white font-mono text-xl font-bold mt-1"> { superHero.name } </h5>
                                            <p className="text-white font-mono text-sm"> Publisher: <span>
                                                { superHero.biography.publisher } 
                                                </span></p>
                                    </div>
                                    <div className="grid grid-cols-3 grid-rows-2">
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faHandFist } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.combat }</text>
                                        </div>
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faShieldBlank } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.durability }</text>
                                        </div>
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faBrain } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.intelligence }</text>
                                        </div>
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faBolt } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.power }</text>
                                        </div>
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faGaugeSimple } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.speed }</text>
                                        </div>
                                        <div className=" self-center">
                                            <FontAwesomeIcon icon={ faDumbbell } />
                                            <text className="ml-1 font-mono font-bold text-xl">{ superHero.powerstats.strength }</text>
                                        </div>

                                    </div>
                                </div>

                            </Link>
                        );
                    }) }
                </div>
            </div>
        </div>
    )
}
export default SuperHeros


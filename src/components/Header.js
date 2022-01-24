import React from "react";

function Header(props) {
    return (
        <div className="shadow-sm border-b bg-gradient-to-r from-gray-900 to-gray-700 sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto h-36 items-center">
                { /* Left component */}
                <div>
                    <h1 className="text-white text-2xl font-mono cursor-pointer">SuperHeroApi</h1>
                </div>

                { /* Middle component */}
                
                <form name="searchForm" className="search-box" onSubmit={props.getSuperHero} > {/* When the form is submited invokes getSuperHero method from app.js file*/}
                    <input 
                        className="search-text w-72 outline-none text-center bg-white"
                        placeholder="Type to search"
                        type="text" name="superHeroName" defaultValue={props.superHeroName}/>
                </form>
                
                { /* Right component */}
                <div className="flex items-center space-x-2">
                    <div className=" w-24">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
                        layout="fill" 
                        objectFit="contain"/>
                    </div>
                    <div className="w-16">
                        <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png"
                        layout="fill" 
                        objectFit="contain"/>
                    </div>
                </div>
            </div>
            <script type="text/javascript">
                {props.superHeroName? window.onload = function(){props.getSuperHero()}: ""}
            </script>
        </div>
    )
}

export default Header;

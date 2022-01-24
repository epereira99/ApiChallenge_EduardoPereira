import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App"
import SuperHeroDetails from "./SuperHeroDetails";

function Router (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/SuperHeroDetails/:id" component={SuperHeroDetails} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router
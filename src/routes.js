    import React from "react"
    import {Switch, Route} from "react-router-dom"
    import Random from "./components/Random"
    import FavList from "./components/FavList"

    export default (
        <Switch>
        {/* <Route path= '/' component= />   */}
        <Route path='/main' component={Random}/>
        <Route exact path='/faves' component={FavList}/>
        
        
        </Switch>
    
    )
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Navbar from './Navbar'
import Comments from './Comments'
import  Posts from  './Posts'
import Users from './Users'
const App=()=>{
  return(
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route exact path='/' render={()=>{return <div>This is the index</div>}}></Route> {/** this will search for all match */}
    <Route exact path="/posts" component={Posts}></Route>
    <Route exact path="/users" component={Users}></Route>
    <Route exact path="/comments" component={Comments}></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;

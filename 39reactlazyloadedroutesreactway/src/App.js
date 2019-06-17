import React from 'react';
import HOC from './HOC'
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar'
const Home=React.lazy(()=>import("./Home"));
const Posts=React.lazy(()=>import("./Posts"));
// const Comments=React.lazy(()=>import("./Comments"));
class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        {/* <Route exact path="/comments" component={Comments}></Route> */}
        </BrowserRouter>
      </div>
    )
  }
}

export default HOC(App);

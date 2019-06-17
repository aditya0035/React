import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './Navbar'
import AsyncComponent from './AsyncComponent'
const Home=AsyncComponent(()=>import("./Home").then(module=>module.default));
const Posts=AsyncComponent(()=>import("./Posts").then(module=>module.default));
const Comments=AsyncComponent(()=>import("./Comments").then(module=>module.default));
class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/comments" component={Comments}></Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;

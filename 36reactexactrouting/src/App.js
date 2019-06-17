import React from 'react';
import {Route,withRouter} from 'react-router-dom'
import NavigationBar from './Navigation'
import Home from './Home'
import Posts from './Posts'
import Comments from './Comments'
class App extends React.Component{
  constructor(props){
    super(props);
    console.log(props)
    // setTimeout(() => {
    //   this.props.history.push("/comments")
    // }, 2000);
  }
  render() {
    return (
      <>
        <NavigationBar />
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/comments" component={Comments}></Route>
        <Route exact path="/" component={Home}></Route>
      </>
    )
  }
}
export default withRouter(App);
//withRouter :-provide routes to the component

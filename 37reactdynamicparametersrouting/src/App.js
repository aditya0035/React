import React from 'react';
import {Route,withRouter,Switch} from 'react-router-dom'
import NavigationBar from './Navigation'
import Home from './Home'
import Posts from './Posts'
// import Comments from './Comments'
import Post from './Post'
import WrapperComment from './WrapperComments'

class App extends React.Component{
  // constructor(props){
  //   super(props);
  //   console.log(props)
  //   // setTimeout(() => {
  //   //   this.props.history.push("/comments")
  //   // }, 2000);
  // }
  render() {
    return (
      <>
        <NavigationBar />
        <Switch>
        <Route exact={true} path="/posts" component={Posts}></Route>
        <Route path="/comments" component={WrapperComment}></Route>
        <Route exact={true} path="/:postId" component={Post}></Route>
        <Route exact={true} path="/" component={Home}></Route>
        {/* <Route path="/comments?commentId=:commentId" component={Comment}></Route> */}
        </Switch>
      </>
    )
  }
}
export default withRouter(App);
//withRouter :-provide routes to the component

import React,{Component} from 'react';
import Post from './Post'
class App extends Component{
      constructor(props){
        super(props)
        this.state={
          "post":{
            id:1,
            title:"This is the title of post",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in sagittis ipsum. Pellentesque quis neque id erat congue laoreet in ut felis. Aenean vehicula vulputate justo, eget lobortis orci sollicitudin quis. Nulla tristique tortor vitae accumsan ornare. Praesent pretium, justo et facilisis consequat, sem enim blandit odio, dignissim aliquam metus ex ut quam. Etiam ut eleifend mauris. Morbi tempor erat est, sed consectetur mi imperdiet nec. Donec scelerisque nibh sed tellus rhoncus, vehicula tempor leo pharetra. Sed efficitur ante est, non ultricies urna gravida feugiat. Curabitur tristique gravida arcu iaculis gravida. Aliquam est lectus, facilisis ac urna id, sodales ultricies ex. Curabitur quis leo sapien. Pellentesque diam orci, aliquet eu tellus at, viverra gravida nisl. Vivamus porttitor sodales dui, vel tincidunt mauris efficitur id. Duis hendrerit tincidunt cursus."
          }
        }
        this.personRef=React.createRef();
      }
      componentDidMount(){
        this.personRef.current.HelloWorld()
      }
      render(){
        return(
          <>
          <Post  post={this.state.post} ref={this.personRef}/>
          </>
        )
      }
}

export default App;

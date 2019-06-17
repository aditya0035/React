import React,{Component} from 'react'

function ErrorBoundries(WrappedComponent){
    return class extends Component{
        constructor(){
            super()
            console.log("in Error Boundries")
            this.state={hasError:false}
        }
        componentDidCatch(){
            this.setState({hasError:true});
        }
        render(){
            return (
                <>
                    {this.state.hasError?<h1>Something Bad Happened</h1>:<WrappedComponent />}
                </>
            )
        }
    };

}

export default ErrorBoundries
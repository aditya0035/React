import React,{Component} from 'react'
class ErrorBoundries extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }
    componentDidCatch(){
        this.setState((prevstate)=>{
            return{
                ...prevstate,
                hasError:true
            }
        })
    }
    render(){
        return (
            <>
            {this.state.hasError?"Something Bad Happened":this.props.children}
            </>
        )
    }
}

export default ErrorBoundries
import React,{Component} from 'react'
const HOC=(WrappedComponent)=>{
    class Wrapper extends Component{
        constructor(props){
            super(props)
            console.log("second called",props)
        }
        render(){
            const {forwardRef,rest}=this.props;
          return( <div>
            <h1>This is inside Wrapped HOC</h1>
            <WrappedComponent ref={forwardRef} {...rest}/>
            </div>
            )
        }
    }
    return React.forwardRef((props,ref)=>{
        console.log("Called First",props)
        return <Wrapper forwardRef={ref} rest={props} />
    });
}

export default HOC
import React,{Component} from 'react'
const AsyncComponent=(defaultModule)=>{
    class AsyncComp extends Component{
        constructor(props){
            super(props);
            this.state={
                Component:null
            }
        }
        componentWillMount(){
            if(!this.state.Component){
                defaultModule().then(module=>{
                    this.setState({Component:module});
                });
            }
        }
        render(){
            let ComponentToRender=this.state.Component
            if(ComponentToRender){
                return <ComponentToRender {...this.props} />
            }
            return null
        }
    }
    return AsyncComp;
}

export default AsyncComponent
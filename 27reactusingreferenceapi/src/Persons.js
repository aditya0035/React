import React,{Component} from 'react'
import Person from './Person'
class Persons extends Component
{
    constructor(props){
        super(props)
        console.log(props)
        this.lastPersonRef=React.createRef()
    }
    componentDidMount(){
        this.lastPersonRef.current.focus();
        this.lastPersonRef.current.HelloWorld();
    }
    render(){
        const {persons}=this.props
        const renderPersons=persons.map((item,index)=>{
            return <div key={item.id}>
                <Person  person={item} position={index} ref={this.lastPersonRef}/>
            </div>
        });
        return (
            <>
            {renderPersons}
            </>
        )
    }

}

export default Persons
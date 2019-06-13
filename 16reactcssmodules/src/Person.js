import React,{Component} from 'react'
import css from './Person.module.css';
class Person extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                <h1 className={css.h1class}>This is from Person</h1>
            </div>
        )
    }
}

export default Person
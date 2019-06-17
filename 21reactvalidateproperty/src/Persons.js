import React from 'react'
import Person from './Person'
const Persons=(props)=>{
    let persons=props.persons;
   let renderPersons=persons.map(item=>{
        return (
            <Person key={item.username} username={item.username} age={item.age}></Person>
        )
      });

    return (
        <div>
           {persons?renderPersons:null} 
        </div>
    )
}

export default Persons

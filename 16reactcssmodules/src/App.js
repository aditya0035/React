import React,{Component} from 'react';
import css from './App.module.css';
import Person from './Person'

class App extends Component{
      constructor(props){
        super(props)
        console.log(props)
      }
      render()
      {
        return(
          <div>
          <h1 className={css.h1class}>Hello From App</h1>
          <Person  />
          </div>
        )
      }
}
export default App;

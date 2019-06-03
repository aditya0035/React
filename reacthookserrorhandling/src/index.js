import React,{useContext,useReducer} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ErrorContext from './ErrorContext'
import ErrorDispatcher from './ErrorDispatcher'

const UseRender=()=>{
    const initialState = useContext(ErrorContext);
    const [state, dispatch] = useReducer(ErrorDispatcher, initialState);
    return (
        <ErrorContext.Provider value={{state:state,dispatch:dispatch}}>
        {state.hasError?<h1>{state.errorMessage}</h1>:<App />}
       </ErrorContext.Provider>
    );
}

ReactDOM.render(<UseRender/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

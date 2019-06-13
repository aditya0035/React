import React from '../node_modules/react';
import Message from './Message'
const App=()=>{
return (<div>
 <Message user={{username:"Aditya"}}>This is children Of Message</Message>
 {/**this is how we put dynamic content into it */}
</div>)
}

export default App;

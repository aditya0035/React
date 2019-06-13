import React from '../node_modules/react';
import Message from './Message'
import AnotherMessage from './AnotherMessage'
const App=()=>{
  const msg=` Hello World from Functional Component`
return (<div>
 <Message user={{username:"Aditya"}}>This is children Of Message</Message>
 {/**this is how we put dynamic content into it */}
 <AnotherMessage msg={msg} >This is children Of AnotherMessage</AnotherMessage>
</div>)
}

export default App;

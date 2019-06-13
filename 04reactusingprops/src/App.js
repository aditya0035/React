import React from '../node_modules/react';
import Message from './Message'
import AnotherMessage from './AnotherMessage'
const App=()=>{
  const msg=` Hello World from Functional Component`
return (<div>
 <Message user={{username:"Aditya"}}/>
 {/**this is how we put dynamic content into it */}
 <AnotherMessage msg={msg} />
</div>)
}

export default App;

import {useContext,createContext} from 'react'
const msgContext = createContext();
const App = props=>{
  
  return(
    <msgContext.Provider value={
      {
        msg:'hello Context!'
      }
    }>
      <Child/>
    </msgContext.Provider>
  )
}
const Child = props=>{
  const childCtx = useContext(msgContext)
  return(
    <div>
      child--{childCtx.msg}
    </div>
  )
}
export default App;

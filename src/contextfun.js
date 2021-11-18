
import {createContext,useContext } from 'react'
const moneyContext = createContext({
  money:'默认值'
})
function App() {

  return (
    <moneyContext.Provider value={
      {
        money:100
      }
    }>
      <Child/>
    </moneyContext.Provider>
  )
}

const Child = ()=>{
  const moneyctx = useContext(moneyContext)
  return(
    <div>
      child--{moneyctx.money}
    </div>
  )
}


export default App;

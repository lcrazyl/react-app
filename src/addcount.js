
import {Counter,counterCtx} from './counter'
import {useContext} from 'react'
function App() {
  return (
    <div>
      <Counter>
        <Button type="add">+</Button>
        <Count/>
        <Button type="reduce">-</Button>
      </Counter>
    </div>
  )
}

const Count = ()=>{
  const countCtx = useContext(counterCtx);
  return(
    <div>
      count:{countCtx.count}
    </div>
  )
}
const Button = props=>{
  const countCtx = useContext(counterCtx);
  const handle = ()=>{
    props.type==="add"?countCtx.add():countCtx.reduce()
  }
  return(
    <button onClick={handle}>{props.children}</button>
  )
}
export default App;

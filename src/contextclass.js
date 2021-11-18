
import {createContext,Component } from 'react'
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
      <div>
      </div>
    </moneyContext.Provider>
  )
}

class Child extends Component{
  static contextType = moneyContext
  
  render(){
    return(
      <div>child--{this.context.money}</div>
    )
  }
}

// class Child extends Component{
//   render(){
//     return(
//       <Consumer>
//         {
//           ({money})=>{
//             return  <div>child--{money}</div>
//           }
//         }
//       </Consumer>
//     )
//   }
// }

export default App;

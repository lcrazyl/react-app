import React,{Component,createContext} from 'react'
const {Consumer}= createContext()
class Child extends Component {
    constructor() {
        super()
        this.state = {  }
    }
    render() { 
        return (
            <Consumer>
              
            {
              ({money})=>{
                console.log(money)
                return  
              }
            }
   
            child--{this.props.msg}
            {
                console.log(this.value)
            }
        </Consumer>
        );
    }
}
 
export default Child;
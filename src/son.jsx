import {Component} from 'react'

class Son extends Component{
    render(){
        return(
            <div>
                son--{this.props.msg}
            </div>
        )
    }
}
export default Son;
import React,{Component} from 'react'

class StateComponent extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.handleCount=this.handleCount.bind(this);
        this.reset=this.reset.bind(this);
    }

    handleCount(){
        this.setState(prevSate=>{
            return{
                count:prevSate.count +1
            }
        });
    }

    reset(){
        this.setState({count:0});
    }

    render(){
        return(
            <div className="container gadget-cell">
                <h1>Count: {this.state.count}</h1>
                <button className="btn btn-default" onClick={this.handleCount}>Add 1</button>
                <span style={{"paddingRight":"25px"}}></span>
                <button className="btn btn-default" onClick={this.reset}>reset</button>
            </div>
            
        )
    }
}

export default StateComponent
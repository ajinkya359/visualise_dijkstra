import React from 'react';
import '../stylesheets/Node.css';
class Node extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    handleEnter=(e)=>{
        this.props.onMouseEnter(this.props.row,this.props.col)
    }
    click=(e)=>{
        this.props.onClick(this.props.row,this.props.col)
    }
    render(){
        // {console.log('called')}
            // if(isVisited) 
        // this.setState({isVisited:isVisited})
        let extraClassname
        // if(this.props.isVisited){
        // extraClassname='visited'

        // }
        if(this.props.isVisited)
            extraClassname="visited"
        if(this.props.isStart)
            extraClassname="node-start"
        if(this.props.isEnd)
            extraClassname="node-end"

        return(
            <div 
            className={`node ${extraClassname}`} 
            id={`${this.props.row}-${this.props.col}`} 
            onClick={this.click}
            onMouseDown={this.props.onMouseDown}
            onMouseUp={this.props.onMouseUp}
            onMouseEnter={this.handleEnter} >
            </div>
        )
    }
}
export default Node;
import React from 'react';
import '../stylesheets/Node.css';
class Node extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    
    render(){
        // {console.log('called')}
        console.log("node")
        const  {isStart,isEnd}=this.props;
        // if(isVisited) 
        // this.setState({isVisited:isVisited})
        let extraClassname
        // if(this.props.isVisited){
        // extraClassname='visited'

        // }
        extraClassname=isStart?'node-start':(isEnd?'node-end':this.props.isVisited?'visited':'node');
        if(this.props.isVisited)
            extraClassname="visited"
        return(
            <div className={`node ${extraClassname}`}>
            </div>
        )
    }
}
export default Node;
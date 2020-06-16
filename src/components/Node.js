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
        const  {isStart,isEnd}=this.props;
        let extraClassname=isStart?'node-start':(isEnd?'node-end':'node');
        // if(isVisited) 
        // this.setState({isVisited:isVisited})
        if(this.props.isVisited){
        extraClassname='visited'
        }
        return(
            <div className={`node ${extraClassname}`}>
            </div>
        )
    }
}
export default Node;
import React from 'react';
import Node from './Node';
import '../stylesheets/Grid.css'
import {dykstra} from '../algorithms/dykstra'
const rows=25;
const start_node_row=0
const start_node_col=0
const end_node_row=12
const end_node_col=20
const columns=50;
class Grid extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            grid:[],
            start_node_row:start_node_row,
            start_node_col:start_node_col,
            end_node_row: end_node_row,
            end_node_col:end_node_col,
        }
        this.visualise=this.visualise.bind(this)
        this.handleReset=this.handleReset.bind(this)

        }
    
    visualise(){   
    const order=dykstra(this.state.grid,start_node_row,start_node_col,end_node_row,end_node_col);
        for(let i=0;i<order.length;i++)
       {
        //    console.log(temp1[order[i].row].props.children[order[i].col].props.isVisited)
        //    temp1[order[i].row][order[i].col].isVisited=true
        //    fi=temp1
        //    this.setState({grid:temp1})
        //    setTimeout(1000)
        setTimeout(()=>{
            // console.log(order[i].row*10+order[i].col)
            // console.log(document.getElementById(`${order[i].row}-${order[i].col}`))
            document.getElementById(`${order[i].row}-${order[i].col}`).className="node visited"
            document.getElementById(`${start_node_row}-${start_node_col}`).className="node node-start"
            document.getElementById(`${end_node_row}-${end_node_col}`).className="node node-end"    
        },10*i)
        
        // document.getElementById(`${order[i].row*10+order[i]}`).className="node node-vi"
       }      
    }
    handleReset(){
        const order=dykstra(this.state.grid,start_node_row,start_node_col,end_node_row,end_node_col);

        if(order.length)
        {
        for(let i=order.length-1;i>=0;i--){
        setTimeout(()=>{
            document.getElementById(`${order[i].row}-${order[i].col}`).className="node"
            document.getElementById(`${start_node_row}-${start_node_col}`).className="node node-start"
            document.getElementById(`${end_node_row}-${end_node_col}`).className="node node-end"    
        },10*i)
        
        // document.getElementById(`${order[i].row*10+order[i]}`).className="node node-vi"
       } 
        }
    }
    componentDidMount(){//is called only once in the start
        var g=[];
        for(let row=0;row<rows;row++)
        {
            var temp=[];
            for(let col=0;col<columns;col++){
                    temp.push(
                          {
                            row:row, 
                            parent:null,
                            col:col, 
                            key:row*10+col, 
                            isStart:row===this.state.start_node_row?(col===this.state.start_node_col?true:false):false,
                            isEnd:row===this.state.end_node_row?(col===this.state.end_node_col?true:false):false,
                            id:row*10+col,
                            distance:Infinity,
                            isVisited:false,
                          } 
                    )    
            }
            g.push(temp)
        }
       this.setState({grid:g})
    }
    
    render(){
        return(
            <div className="grid">
                {this.state.grid.map((row,idr)=>(
                    <div className="grid-row" key={idr*1000+1}>
                        {row.map((col,idc)=>
                        <Node
                            row={idr} 
                            parent={null}
                            col={idc}
                            key={idr*10+idc} 
                            isStart={idr===this.state.start_node_row?(idc===this.state.start_node_col?true:false):false}
                            isEnd={idr===this.state.end_node_row?(idc===this.state.end_node_col?true:false):false}
                            distance={col.distance}
                            isVisited={col.isVisited}/>

                        )}
                    </div>
                ))}
                <button onClick={this.visualise}> visualise</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Grid;
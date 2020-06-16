import React from 'react';
import Node from './Node';
import '../stylesheets/Grid.css'
import {dykstra} from '../algorithms/dykstra'
const rows=25;
var fi=[]
const start_node_row=3
const start_node_col=20
const end_node_row=10
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
    }
    
    visualise(){   
       const order=dykstra(fi,start_node_row,start_node_col,end_node_row,end_node_col);
       var temp1=this.state.grid;
        for(let i=0;i<order.length;i++)
       {
        //    console.log(temp1[order[i].row].props.children[order[i].col].props.isVisited)
           temp1[order[i].row][order[i].col].isVisited=true
           fi=temp1
           this.setState({grid:temp1})
           setTimeout(1000)
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
        fi=g
       this.setState({grid:g})
    }
    
    render(){
      console.log("called")
        return(
            <div className="grid">
                {fi.map((row,idr)=>(
                    <div className="grid-row" key={idr*1000+1}>
                        {row.map((col,idc)=>
                        <Node
                            row={idr} 
                            parent={null}
                            col={idc}
                            key={idr*10+idc} 
                            isStart={idr===this.state.start_node_row?(idc===this.state.start_node_col?true:false):false}
                            isEnd={idr===this.state.end_node_row?(idc===this.state.end_node_col?true:false):false}
                            id={row*10+col}
                            distance={col.distance}
                            isVisited={col.isVisited}/>

                        )}
                    </div>
                ))}
                <button onClick={this.visualise}> visualise</button>
            </div>
        )
    }
}

export default Grid;
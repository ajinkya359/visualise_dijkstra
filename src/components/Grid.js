import React from 'react';
import Node from './Node';
import '../stylesheets/Grid.css'
import {dykstra} from '../algorithms/dykstra'
var g=[]
const rows=25;
const start_node_row=0
const start_node_col=20
const end_node_row=1
const end_node_col=10
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
        var grid=[];
        for(let i=0;i<rows;i++)
        {
            var temp=[];
            for(let j=0;j<columns;j++)
                temp.push({
                    row:i,
                    col:j,
                    distance:Infinity,
                    isStart:i===start_node_row?(j===start_node_col?true:false):false,
                    isEnd:i===end_node_row?(j===end_node_col?true:false):false,
                    parent:null
                })
            grid.push(temp)
        }
        
       const order=dykstra(grid,start_node_row,start_node_col,end_node_row,end_node_col);
       for(let i=0;i<order.length;i++)
       {
           var temp1=this.state.grid;
        //    console.log(temp1[order[i].row].props.children[order[i].col].props.isVisited)
           temp1[order[i].row].props.children[order[i].col]=(
               <Node 
               row={order[i].row} 
                        col={order[i].col} 
                        parent={order[i].parent}
                        key={order[i].row*10+order[i].col} 
                        isStart={order[i].row===this.state.start_node_row?(order[i].col===this.state.start_node_col?true:false):false}
                        isEnd={order[i].row===this.state.end_node_row?(order[i].col===this.state.end_node_col?true:false):false}
                        id={order[i].row*10+order[i].col}
                        distance={order[i].distance}
                        isVisited={true}/>
           )
        //    console.log(temp1[order[i].row].props.children[order[i].col].props.isVisited)

            g=[]
            this.setState({grid:[]})
            g=temp1;
            this.setState({grid:temp1})
        //    g=this.state.grid
        //    console.log(this.state.grid)
       }          
       
        // console.log(this.state.grid)

    //    console.log(this.state.grid)
        // var temp1=this.state.grid
        // console.log(this.state.grid)
        // console.log("temp1")
        // console.log(temp1[0].props.children[0])
    }
    componentDidMount(){//is called only once in the start
        var grid=[];
        for(let row=0;row<rows;row++)
        {
            var temp=[];
            for(let col=0;col<columns;col++){
                    temp.push(
                        <Node      
                            row={row} 
                            parent={null}
                            col={col} 
                            key={row*10+col} 
                            isStart={row===this.state.start_node_row?(col===this.state.start_node_col?true:false):false}
                            isEnd={row===this.state.end_node_row?(col===this.state.end_node_col?true:false):false}
                            id={row*10+col}
                            distance={Infinity}
                            isVisited={false}
                            ></Node>
                    )    
            }
            grid.push(
                <div className="grid-row" key={(row+1)*1000}>
                    {temp}
                </div>
            )
        }
        
       this.setState({grid:grid})
    }
    
    render(){
      console.log("called")
        return(
            <div className="grid">
                {this.state.grid}
                <button onClick={this.visualise}> visualise</button>
            </div>
        )
    }
}

export default Grid;
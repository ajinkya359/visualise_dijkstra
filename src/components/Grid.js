import React from 'react';
import Node from './Node';
import '../stylesheets/Grid.css'
import {dykstra} from '../algorithms/dykstra'
const rows=25;
var start_node_row=10
var start_node_col=20
var end_node_row=23
var end_node_col=28   
const columns=50;
class Grid extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            grid:[],
            set:null,
            reset:false,
            start_node_row:start_node_row,
            start_node_col:start_node_col,
            end_node_row: end_node_row,
            end_node_col:end_node_col,
        }
        this.visualise=this.visualise.bind(this)
        this.handleReset=this.handleReset.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.setToStart=this.setToStart.bind(this)
        this.setToEnd=this.setToEnd.bind(this)
        this.handleWall=this.handleWall.bind(this)

    }
    
    handleClick=(row,col)=>{
        if(!this.state.set) {
            console.log("Choose what to set")
            return;
        }
        if(this.state.reset)
        this.handleReset()
        if(this.state.set===1){
        var temp=this.state.grid;
        temp[this.state.start_node_row][start_node_col].isStart=false
        temp[row][col].isStart=true
        document.getElementById(`${this.state.start_node_row}-${this.state.start_node_col}`).className="node"
        document.getElementById(`${this.state.start_node_row}-${this.state.start_node_col}`).isStart=false
        document.getElementById(`${row}-${col}`).className="node node-start"
        document.getElementById(`${row}-${col}`).isStart=true;
        start_node_row=row
        start_node_col=col
        this.setState({start_node_row:row,start_node_col:col,grid:temp})
        }
        else if(this.state.set===2){
            var temp=this.state.grid;
        temp[this.state.end_node_row][end_node_col].isEnd=false
        temp[row][col].isEnd=true
        document.getElementById(`${this.state.end_node_row}-${this.state.end_node_col}`).className="node"
        document.getElementById(`${this.state.end_node_row}-${this.state.end_node_col}`).isEnd=false
        document.getElementById(`${row}-${col}`).className="node node-finish"
        document.getElementById(`${row}-${col}`).isEnd=true;
        end_node_row=row
        end_node_col=col
        this.setState({end_node_row:row,end_node_col:col,grid:temp})
        }
        else{
            if((row===start_node_row&&col===start_node_col)||(row===end_node_row&&col===end_node_col)) 
            return
        var temp=this.state.grid;
        if(!temp[row][col].isWall){
        temp[row][col].isWall=true;
        document.getElementById(`${row}-${col}`).className="node wall"
        this.setState({grid:temp})
    }
        else{
          temp[row][col].isWall=false;
          document.getElementById(`${row}-${col}`).className="node"
          this.setState({grid:temp})
        }
        
    }
    }
    visualise(){
    if(this.state.reset)
    {
        this.handleReset();
    }
    var temp=this.state.grid
    const order=dykstra(temp,start_node_row,start_node_col,end_node_row,end_node_col);
        for(let i=0;i<=order.length;i++)
       {
       
        if(i===order.length){
            setTimeout(()=>{
                var current=temp[end_node_row][end_node_col].parent
                while(current&&!current.isStart)
                {
                    document.getElementById(`${current.row}-${current.col}`).className="node path"
                    current=current.parent
                    if(!current){
                        console.log("no path")
                        break;
                    }
                }
                if(current===null){
                    window.alert("No path found")
                }
            },10*i)
            return;
         }
        setTimeout(()=>{
            document.getElementById(`${order[i].row}-${order[i].col}`).className="node visited"
            document.getElementById(`${start_node_row}-${start_node_col}`).className="node node-start"
            document.getElementById(`${end_node_row}-${end_node_col}`).className="node node-end"    
        },10*i)
        
        // document.getElementById(`${order[i].row*10+order[i]}`).className="node node-vi"
       }
       this.setState({reset:true})

       
    }
    setToStart(){
        var temp =1
        // e.style="background_color=green"
        this.setState({set:temp})
    }
    setToEnd(){
        var temp =2
        this.setState({set:temp})
    }
    handleWall(){
        var temp=3;
        this.setState({set:temp})
    }
    handleReset(){
        
        var temp=this.state.grid;
        const order=dykstra(temp,start_node_row,start_node_col,end_node_row,end_node_col);
        if(order.length)
        {
        for(let i=temp.length-1;i>=0;i--){
        for(let j=0;j<temp[0].length;j++){
        setTimeout(()=>{
            if(temp[i][j].isWall) return;
            document.getElementById(`${temp[i][j].row}-${temp[i][j].col}`).className="node"
            document.getElementById(`${start_node_row}-${start_node_col}`).className="node node-start"
            document.getElementById(`${end_node_row}-${end_node_col}`).className="node node-end"    
        },10*j)}
        
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
                            isWall:false, 
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
                      <header>Dijkstra's algorithm</header>

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
                            isVisited={col.isVisited}
                            onClick={this.handleClick}>
                            </Node>
                            
                        )}
                    </div>
                ))}
                <button onClick={this.setToStart}>Set Start</button>
                <button onClick={this.setToEnd}>Set End</button>
                <button onClick={this.visualise}> visualise</button>
                <button onClick={this.handleReset}>Reset</button>
                <button onClick={this.handleWall}>Add Wall</button>
            </div>
        )
    }
}

export default Grid;
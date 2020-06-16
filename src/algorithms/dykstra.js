
export function dykstra(grid,start_row,start_col,end_row,end_col){
    var queue=[];
    var order=[];
    grid[start_row][start_col].distance=0;
    //Initialised the queue
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[0].length;j++)
            queue.push(grid[i][j]);
    }
    grid[0][1].distance=1;
    queue.sort((a,b)=>{return a.distance>b.distance?1:-1})
    console.log(queue[1].distance)
    while(queue.length)
    {
        queue.sort((a,b)=>{return a.distance>b.distance?1:-1})
        var temp=queue[0];
        queue.shift();
        if(temp.row!==0&&temp.row!==grid.length-1)
        {
            if(temp.col===0)
            {
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length)
            {
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
            else{
            max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
            max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
        }
        else if (temp.row===0) {
            if(temp.col===0)
            {
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
            {
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
            else{
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
        } 
        else {
            if(temp.col===0)
            {
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
            {
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
            else{
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
        }
        order.push(temp)
        if(temp.row===end_row&&temp.col===end_col)
            break;
    }
    // tem.sort((a,b)=>{
    //     return a.first>b.first?1:-1;
    // })
    // console.log(order)
    return order
}
function max(a,b){
    if(a.distance>b.distance+1){
        a.distance=b.distance+1
        a.parent=b;
    }
}

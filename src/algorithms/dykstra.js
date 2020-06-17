export function dykstra(grid,start_row,start_col,end_row,end_col){
    var queue=[];
    var order=[];
    //Initialised the queue
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[0].length;j++){
            grid[i][j].parent=null;
            grid[i][j].distance=Infinity;
            queue.push(grid[i][j]);
        }
    }
    grid[start_row][start_col].distance=0;

    while(queue.length)
    {
        queue.sort((a,b)=>{return a.distance>b.distance?1:-1})
        var temp=queue[0];
        queue.shift();
        if(temp.isWall||temp.distance===Infinity) continue;
        if(temp.row!==0&&temp.row!==grid.length-1)
        {
            if(temp.col===0)
            {
                max(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
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
        {
            
            break;}
    }
    function max(a,b){
        if(a.distance>b.distance+b.weight){
            a.distance=b.distance+b.weight
            a.parent=b;
        }
    }
    // tem.sort((a,b)=>{
    //     return a.first>b.first?1:-1;
    // })
    // console.log(order)
    
    return order
}
export function a_star(grid,start_row,start_col,end_row,end_col){
    var queue=[];
    var order=[];
    //Initialised the queue
    for(let i=0;i<grid.length;i++)
    {
        for(let j=0;j<grid[0].length;j++){
            grid[i][j].parent=null;
            grid[i][j].h=Math.sqrt((end_row-grid[i][j].row)*(end_row-grid[i][j].row)+(end_col-grid[i][j].col)*(end_col-grid[i][j].col))
            grid[i][j].distance=Infinity;
            grid[i][j].f=Infinity
            queue.push(grid[i][j]);
        }
    }
    grid[start_row][start_col].distance=0;
    grid[start_row][start_col].f=grid[start_row][start_col].h
    while(queue.length)
    {
        queue.sort((a,b)=>{return a.f>b.f?1:-1})
        var temp=queue[0];
        queue.shift();
        if(temp.isWall||temp.distance===Infinity) continue;
        if(temp.row!==0&&temp.row!==grid.length-1)
        {
            if(temp.col===0)
            {
                max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
            {
                max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
                max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
            else{
            max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
            max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
            }
        }
        else if (temp.row===0) {
            if(temp.col===0)
            {
                max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
            {
                max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
            else{
                max1(grid[temp.row+1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
        } 
        else {
            if(temp.col===0)
            {
                max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
            }
            else if(temp.col===grid[0].length-1)
            {
                max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
            else{
                max1(grid[temp.row-1][temp.col],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col+1],grid[temp.row][temp.col])
                max1(grid[temp.row][temp.col-1],grid[temp.row][temp.col])
            }
        }
        order.push(temp)

        if(temp.row===end_row&&temp.col===end_col)
        {
            
            break;}
    }
    // tem.sort((a,b)=>{
    //     return a.first>b.first?1:-1;
    // })
    // console.log(order)
    function max1(a,b){
        if(a.f>b.distance+a.h+b.weight){
            a.distance=b.distance+b.weight
            a.f=a.distance+a.h
            a.parent=b;
    
        }
    }
    return order
}




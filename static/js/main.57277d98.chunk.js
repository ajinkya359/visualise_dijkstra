(this["webpackJsonpdykstra-algo"]=this["webpackJsonpdykstra-algo"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),o=n.n(s),a=n(7),c=n.n(a),l=(n(13),n(2)),d=n(3),i=n(1),r=n(5),m=n(4),u=(n(14),function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleEnter=function(e){s.props.onMouseEnter(s.props.row,s.props.col)},s.click=function(e){s.props.onClick(s.props.row,s.props.col)},s.state={},s}return Object(d.a)(n,[{key:"render",value:function(){var e;return this.props.isVisited&&(e="visited"),this.props.isStart&&(e="node-start"),this.props.isEnd&&(e="node-end"),o.a.createElement("div",{className:"node ".concat(e),id:"".concat(this.props.row,"-").concat(this.props.col),onClick:this.click,onMouseDown:this.props.onMouseDown,onMouseUp:this.props.onMouseUp,onMouseEnter:this.handleEnter})}}]),n}(o.a.Component));n(15);function g(e,t){e.distance>t.distance+t.weight&&(e.distance=t.distance+t.weight,e.parent=t)}var h=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleClick=function(e,t){if(s.state.set)if(s.state.reset&&s.handleReset(),1===s.state.set){var n=s.state.grid;n[s.state.start_node_row][s.state.start_node_col].isStart=!1,n[e][t].isStart=!0,document.getElementById("".concat(s.state.start_node_row,"-").concat(s.state.start_node_col)).className="node",document.getElementById("".concat(s.state.start_node_row,"-").concat(s.state.start_node_col)).isStart=!1,document.getElementById("".concat(e,"-").concat(t)).className="node node-start",document.getElementById("".concat(e,"-").concat(t)).isStart=!0,s.setState({start_node_row:e,start_node_col:t,grid:n})}else if(2===s.state.set)n=s.state.grid,s.state.end_node_row&&s.state.end_node_col&&(n[s.state.end_node_row][s.state.end_node_col].isEnd=!1),n[e][t].isEnd=!0,document.getElementById("".concat(s.state.end_node_row,"-").concat(s.state.end_node_col)).className="node",document.getElementById("".concat(s.state.end_node_row,"-").concat(s.state.end_node_col)).isEnd=!1,document.getElementById("".concat(e,"-").concat(t)).className="node node-finish",document.getElementById("".concat(e,"-").concat(t)).isEnd=!0,s.setState({end_node_row:e,end_node_col:t,grid:n});else if(4===s.state.set){if(e===s.state.start_node_row&&t===s.state.start_node_col||e===s.state.end_node_row&&t===s.state.end_node_col)return;1===(n=s.state.grid)[e][t].weight?(n[e][t].weight=s.state.weight,document.getElementById("".concat(e,"-").concat(t)).className="node weight",s.setState({grid:n})):(n[e][t].weight=1,document.getElementById("".concat(e,"-").concat(t)).className="node",s.setState({grid:n}))}else{if(e===s.state.start_node_row&&t===s.state.start_node_col||e===s.state.end_node_row&&t===s.state.end_node_col)return;(n=s.state.grid)[e][t].isWall?(n[e][t].isWall=!1,document.getElementById("".concat(e,"-").concat(t)).className="node",s.setState({grid:n})):(n[e][t].isWall=!0,document.getElementById("".concat(e,"-").concat(t)).className="node wall",s.setState({grid:n}))}else console.log("Choose what to set")},s.handleMouseEnter=function(e,t){if(s.state.isClicked&&3===s.state.set){if(e===s.state.start_node_row&&t===s.state.start_node_col||e===s.state.end_node_row&&t===s.state.end_node_col)return;var n=s.state.grid;n[e][t].isWall?(n[e][t].isWall=!1,document.getElementById("".concat(e,"-").concat(t)).className="node",s.setState({grid:n})):(n[e][t].isWall=!0,document.getElementById("".concat(e,"-").concat(t)).className="node wall",s.setState({grid:n}))}},s.state={grid:[],rows:25,columns:50,set:null,reset:!1,start_node_row:10,start_node_col:20,end_node_row:22,end_node_col:40,isClicked:!1,weight:10},s.visualise=s.visualise.bind(Object(i.a)(s)),s.handleReset=s.handleReset.bind(Object(i.a)(s)),s.handleClick=s.handleClick.bind(Object(i.a)(s)),s.setToStart=s.setToStart.bind(Object(i.a)(s)),s.setToEnd=s.setToEnd.bind(Object(i.a)(s)),s.handleWall=s.handleWall.bind(Object(i.a)(s)),s.handleMouseDown=s.handleMouseDown.bind(Object(i.a)(s)),s.handleMouserUp=s.handleMouserUp.bind(Object(i.a)(s)),s.handleMouseEnter=s.handleMouseEnter.bind(Object(i.a)(s)),s.resetWalls=s.resetWalls.bind(Object(i.a)(s)),s.setWeight=s.setWeight.bind(Object(i.a)(s)),s.resetWeights=s.resetWeights.bind(Object(i.a)(s)),s.inputWeight=s.inputWeight.bind(Object(i.a)(s)),s}return Object(d.a)(n,[{key:"visualise",value:function(){var e=this;this.setState({set:-1}),document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="clicked",document.getElementById("set-reset").className="",document.getElementById("set-weight").className="",document.getElementById("set-wall").className="",this.state.reset&&this.handleReset();for(var t=this.state.grid,n=function(e,t,n,s,o){for(var a=[],c=[],l=0;l<e.length;l++)for(var d=0;d<e[0].length;d++)e[l][d].parent=null,e[l][d].distance=1/0,a.push(e[l][d]);for(e[t][n].distance=0;a.length;){a.sort((function(e,t){return e.distance>t.distance?1:-1}));var i=a[0];if(a.shift(),!i.isWall&&i.distance!==1/0&&(0!==i.row&&i.row!==e.length-1?0===i.col?(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col]),g(e[i.row-1][i.col],e[i.row][i.col])):i.col===e[0].length-1?(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col]),g(e[i.row-1][i.col],e[i.row][i.col])):(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col]),g(e[i.row-1][i.col],e[i.row][i.col])):0===i.row?0===i.col?(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col])):i.col===e[0].length-1?(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col])):(g(e[i.row+1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col])):0===i.col?(g(e[i.row-1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col])):i.col===e[0].length-1?(g(e[i.row-1][i.col],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col])):(g(e[i.row-1][i.col],e[i.row][i.col]),g(e[i.row][i.col+1],e[i.row][i.col]),g(e[i.row][i.col-1],e[i.row][i.col])),c.push(i),i.row===s&&i.col===o))break}return c}(t,this.state.start_node_row,this.state.start_node_col,this.state.end_node_row,this.state.end_node_col),s=function(s){if(s===n.length)return setTimeout((function(){for(var n=t[e.state.end_node_row][e.state.end_node_col].parent;n&&!n.isStart;)if(document.getElementById("".concat(n.row,"-").concat(n.col)).className="node path",!(n=n.parent)){console.log("no path");break}null===n&&window.alert("No path found")}),10*s),{v:void 0};setTimeout((function(){document.getElementById("".concat(n[s].row,"-").concat(n[s].col)).className="node visited",1!==t[n[s].row][n[s].col].weight&&(document.getElementById("".concat(n[s].row,"-").concat(n[s].col)).className="node weight"),document.getElementById("".concat(e.state.start_node_row,"-").concat(e.state.start_node_col)).className="node node-start",document.getElementById("".concat(e.state.end_node_row,"-").concat(e.state.end_node_col)).className="node node-end"}),10*s)},o=0;o<=n.length;o++){var a=s(o);if("object"===typeof a)return a.v}this.setState({reset:!0})}},{key:"resetWeights",value:function(){var e=this;this.setState({set:-1}),document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="";for(var t=this.state.grid,n=function(n){for(var s=function(s){setTimeout((function(){document.getElementById("".concat(t[n][s].row,"-").concat(t[n][s].col)).className="node",t[n][s].weight=1,document.getElementById("".concat(e.state.start_node_row,"-").concat(e.state.start_node_col)).className="node node-start",document.getElementById("".concat(e.state.end_node_row,"-").concat(e.state.end_node_col)).className="node node-end"}),10*s)},o=0;o<t[0].length;o++)s(o)},s=t.length-1;s>=0;s--)n(s);this.setState({grid:t})}},{key:"resetWalls",value:function(){var e=this;this.setState({set:-1}),document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="";for(var t=this.state.grid,n=function(n){for(var s=function(s){setTimeout((function(){1===t[n][s].weight&&(document.getElementById("".concat(t[n][s].row,"-").concat(t[n][s].col)).className="node",t[n][s].isWall=!1,document.getElementById("".concat(e.state.start_node_row,"-").concat(e.state.start_node_col)).className="node node-start",document.getElementById("".concat(e.state.end_node_row,"-").concat(e.state.end_node_col)).className="node node-end")}),10*s)},o=0;o<t[0].length;o++)s(o)},s=t.length-1;s>=0;s--)n(s);this.setState({grid:t})}},{key:"setToStart",value:function(){document.getElementById("set-start").className="clicked",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="";this.setState({set:1})}},{key:"setWeight",value:function(){document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="clicked";this.setState({set:4})}},{key:"setToEnd",value:function(){document.getElementById("set-start").className="",document.getElementById("set-end").className="clicked",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="";this.setState({set:2})}},{key:"handleWall",value:function(){document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="",document.getElementById("set-wall").className="clicked",document.getElementById("set-weight").className="";this.setState({set:3})}},{key:"handleMouseDown",value:function(){var e=this.state.isClicked;!1===e&&(e=!0),this.setState({isClicked:e})}},{key:"handleMouserUp",value:function(){var e=this.state.isClicked;e&&(e=!1),this.setState({isClicked:e})}},{key:"handleReset",value:function(){var e=this;this.setState({set:-1}),document.getElementById("set-start").className="",document.getElementById("set-end").className="",document.getElementById("set-visualise").className="",document.getElementById("set-reset").className="clicked",document.getElementById("set-wall").className="",document.getElementById("set-weight").className="";for(var t=this.state.grid,n=function(n){for(var s=function(s){setTimeout((function(){t[n][s].isWall||1!==t[n][s].weight||(document.getElementById("".concat(t[n][s].row,"-").concat(t[n][s].col)).className="node",document.getElementById("".concat(e.state.start_node_row,"-").concat(e.state.start_node_col)).className="node node-start",document.getElementById("".concat(e.state.end_node_row,"-").concat(e.state.end_node_col)).className="node node-end")}),10*s)},o=0;o<t[0].length;o++)s(o)},s=t.length-1;s>=0;s--)n(s)}},{key:"componentDidMount",value:function(){for(var e=[],t=0;t<this.state.rows;t++){for(var n=[],s=0;s<this.state.columns;s++)n.push({row:t,isWall:!1,parent:null,col:s,key:10*t+s,isStart:t===this.state.start_node_row&&s===this.state.start_node_col,isEnd:t===this.state.end_node_row&&s===this.state.end_node_col,id:10*t+s,distance:1/0,isVisited:!1,weight:1});e.push(n)}this.setState({grid:e})}},{key:"inputWeight",value:function(e){e.preventDefault();var t=e.target.weight.value;this.setState({weight:t});for(var n=this.state.grid,s=0;s<this.state.row;s++)for(var o=0;o<this.state.col;o++)1!==n[s][o].weight&&(n[s][o].weight=t);this.setState({grid:n}),console.log(this.state.weight)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"grid"},o.a.createElement("header",null,"Dijkstra's algorithm"),this.state.grid.map((function(t,n){return o.a.createElement("div",{className:"grid-row",key:1e3*n+1},t.map((function(t,s){return o.a.createElement(u,{row:n,parent:null,col:s,weight:t.weight,key:10*n+s,isStart:n===e.state.start_node_row&&s===e.state.start_node_col,isEnd:n===e.state.end_node_row&&s===e.state.end_node_col,distance:t.distance,isVisited:t.isVisited,onClick:e.handleClick,onMouseDown:e.handleMouseDown,onMouseUp:e.handleMouserUp,onMouseEnter:e.handleMouseEnter})})))})),o.a.createElement("button",{onClick:this.setToStart,clicked:!1,id:"set-start"},"Set Start"),o.a.createElement("button",{onClick:this.setToEnd,clicked:!1,id:"set-end"},"Set End"),o.a.createElement("button",{onClick:this.visualise,clicked:!1,id:"set-visualise"}," visualise"),o.a.createElement("button",{onClick:this.handleReset,clicked:!1,id:"set-reset"},"Reset"),o.a.createElement("button",{onClick:this.handleWall,clicked:!1,id:"set-wall"},"Add Wall"),o.a.createElement("button",{onClick:this.resetWalls},"Reset Walls"),o.a.createElement("button",{onClick:this.setWeight,clicked:!1,id:"set-weight"},"Set Weight"),o.a.createElement("button",{onClick:this.resetWeights},"Reset Weights"))}}]),n}(o.a.Component);var w=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.57277d98.chunk.js.map
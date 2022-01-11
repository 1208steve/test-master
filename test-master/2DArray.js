const readline = require("readline-sync");

var row = 6;
var col = 6;
var map = [];
var couarr = [];

//建立地圖
for (var i = 0; i < row; i++) {
    map.push([]);
    couarr.push([]);
    for (var j = 0; j < col; j++){
        map[i][j] = Math.floor(Math.random() * row) + "," + Math.floor(Math.random() * col);
        couarr[i][j] = 0;
    }
}





//用遞迴去跑 寫起來方便又快速
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++){
        var root = map[i][j].split(",");
        couarr[i][j] = DFS(root[0], root[1], [i + "," + j], 1);
    }
}

function DFS(R, C, arr, cou){
    if(arr.indexOf(R + "," + C) == -1){
        arr.push(R + "," + C);
        var node = map[R][C].split(",");
        return DFS(node[0], node[1], arr, cou + 1);
    }else{
        return cou;
    }
}



//為了效能接用迴圈跑
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++){
        var now = map[i][j].split(",");
        var arr = [i + "," + j];
        var cou = 1;
        
        while(true){
            if(arr.indexOf(now[0] + "," + now[1]) == -1){
                arr.push(now[0] + "," + now[1]);
                cou++;
                now = map[now[0]][now[1]].split(",");
            }else{
                couarr[i][j] = cou;
                break;
            }
        }
    }
}







//計算最大值與列出能夠走出最大值的R與C
var maxArr = [];
var maxNum = 0;

for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++){
        if(couarr[i][j] > maxNum){
            maxNum = couarr[i][j];
            maxArr = ["[" + i + "]" + "[" + j + "]: " + map[i][j]];
        }else if(couarr[i][j] == maxNum){
            maxArr.push("[" + i + "]" + "[" + j + "]: " + map[i][j]);
        }
    } 
}

console.log("Max step:" + maxNum + "\n" + "能夠走出最大步數的 R與C: ");//印出最大的步數
console.log(maxArr);//印出能夠走出最大步數的 R與C 還有在地圖中顯示的內容



//讓使用著能夠一直的去輸入R與C
while(true){
    var startR= parseInt(readline.question('Row start?'));
    var startC= parseInt(readline.question('Col start?'));
    if(isNaN(startR) || isNaN(startC) || startR<0 || startR>=row || startC<0 || startC>=col){
        console.log("Input error! ");
        continue;
    }
    console.log("Visit:"+ startR + ", " + startC + "  Step:" + couarr[startR][startC]);
 }
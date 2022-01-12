const readline = require("readline-sync");

var row = 6;
var col = 6;
var map = [];
var couarr = [];


for (var i = 0; i < row; i++) {
    map.push([]);
    couarr.push([]);
    for (var j = 0; j < col; j++){
        map[i][j] = Math.floor(Math.random() * row) + "," + Math.floor(Math.random() * col);
        couarr[i][j] = 0;
    }
}




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

console.log("Max step:" + maxNum + "\n" + "能夠走出最大步數的 R與C: ");
console.log(maxArr);



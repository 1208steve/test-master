var floorName = []; //用來儲存樓層的陣列
var MaxF = 100;     //最大樓層
var MinF = -3;      //最小樓層


//用陣列新增樓層
for (var i = MinF; i < MaxF + 1; i++){
    if(i < 0){
        floorName.push("B" + i * -1 );
    }else{
        floorName.push(i);
    }
}

console.log(floorName.join(", "));//輸出樓層


//延遲
//方法一 寫一個function
//用getTime取得時間後持續計算時間 直到時間到才跳出迴圈
//時間到之前 以下的程式碼都不執行
function Dealy1(sec){
    var start = new Date().getTime();
    var now = 0;
    while(start + sec > now){
        now = new Date().getTime();
    };
}
Dealy1(3000);
console.log("Dealy1");


//方法二 用setTimeout
//必須使用let或直接新開一個function把當時在for中的i儲存起來
//時間到之前會繼續往後執行
for (let i = 0; i < 5; i++){
    setTimeout(() => {console.log(i)}, 4000);
}

for (var i = 0; i < 5; i++){
    (function(x){
        setTimeout(() => {console.log(x)}, 5000);    
    })(i);
}

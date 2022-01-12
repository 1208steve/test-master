var floorName = []; 
var MaxF = 100;     
var MinF = -3;      



for (var i = MinF; i < MaxF + 1; i++){
    if(i < 0){
        floorName.push("B" + i * -1 );
    }else{
        floorName.push(i);
    }
}

console.log(floorName.join(", "));

for (let i = 0; i < 5; i++){
    setTimeout(() => {console.log(i)}, 4000);
}

for (var i = 0; i < 5; i++){
    (function(x){
        setTimeout(() => {console.log(x)}, 5000);    
    })(i);
}

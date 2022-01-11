const LIVE=1, DEAD=0; 

class Life {
    constructor(_row,_col){
        this.row = _row;
        this.col = _col;
        this.grid = new Array();

        for (let r = 0; r < this.row; r++) {
           this.grid.push(new Array());
           for (let c = 0; c < this.col; c++) {
               this.grid[r].push(DEAD);
           }
        }
    }
};

Life.prototype.Initialize = function(){
    this.grid[3][4] = LIVE;
    this.grid[3][5] = LIVE;
    this.grid[3][6] = LIVE;
    this.grid[3][7] = LIVE;
}

Life.prototype.getStatusAt = function(row, col){
    if(row<0 || col <0 || row >= this.row || col >= this.col)
       return DEAD;
    return this.grid[row][col];
}

Life.prototype.neighborCount = function(row, col){
    var count=0;
    count += this.getStatusAt(row-1, col-1);
    count += this.getStatusAt(row-1, col);
    count += this.getStatusAt(row-1, col+1);
    count += this.getStatusAt(row, col-1);
    count += this.getStatusAt(row, col+1);
    count += this.getStatusAt(row+1, col-1);
    count += this.getStatusAt(row+1, col);
    count += this.getStatusAt(row+1, col+1);
    return count;
}

Life.prototype.update = function(){
    var nextGrid = JSON.parse(JSON.stringify(this.grid));

    for (let r = 0; r < this.row; r++) {
        for (let c = 0; c < this.col; c++) {
            var nCount = this.neighborCount(r, c);
            if(nCount == 3)
               nextGrid[r][c] = LIVE;
            if(nCount <2 || nCount>3)
               nextGrid[r][c] = DEAD;
        }
    }
    this.grid = nextGrid;
}


var game = new Life(100,100);
var game2 = new Life(10,10);
game.Initialize();
game.update();
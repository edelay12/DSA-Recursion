function solve(maze){

this.maze = maze;

this.traverse = function(column, row) {
if (this.maze[column][row] == 'e') {
    console.log(`Maze solved at ${column} ${row}`)
} else if (this.maze[column][row] == '*') {
    console.log('on a valid path')
    this.maze[column][row] = '*';
 if (column < this.maze.length-1){
    this.traverse(column +1, row)
} if ( row < this.maze[column].length -1) {
    this.traverse(column, row +1)
} 
if (column > 0) {
    this.traverse(column -1 , row)
}
if (row > 0) {
    this.traverse(column, row -1)
}
}
}

}


let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
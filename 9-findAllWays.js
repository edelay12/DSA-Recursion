/* 9. Find ALL the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. To find all possible exit paths through the maze, think about how many places you can move at each turn. Possibly up, down, left or right?

Notice that this maze has 3 exits paths. Your recursive function should print all three of the paths with the proper directions. For example, given the maze above, the program should output the following:

Path to the exit: RRDDLLDDRRRRRR
Path to the exit: RRDDRRUURRDDDD
Path to the exit: RRDDRRRRDD
*/

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
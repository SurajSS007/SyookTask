// 1. Find the number of islands 
// Given a boolean 2D matrix, find the number of islands. 
// A group of connected 1s forms an island. 
// For example, the below matrix contains 5 islands  
const matrix = [      ['1', '1', '0', '0', '0'],
                      ['0', '1', '0', '0', '1'], 
                      ['1', '0', '0', '1', '1'],
                      ['0', '0', '0', '0', '0'],
                      ['1', '0', '1', '0', '1']
                 ]; 


                 const numIslands = (grid) => {
                    let counter = 0;
                    const dfs = (i, j) => {
                      if (
                        i >= 0 &&
                        j >= 0 &&
                        i < grid.length &&
                        j < grid[i].length &&
                        grid[i][j] === '1'
                      ) {
                        grid[i][j] = '0';
                        dfs(i + 1, j); 
                        dfs(i, j + 1); 
                        dfs(i - 1, j); 
                        dfs(i, j - 1); 
                      }
                    };
                  
                    for (let i = 0; i < grid.length; i++) {
                      for (let j = 0; j < grid[i].length; j++) {
                        if (grid[i][j] === '1') {
                          counter += 1;
                          dfs(i, j);
                        }
                      }
                    }
                  
                    return counter;
                  };   


                console.log(numIslands(matrix))  ;
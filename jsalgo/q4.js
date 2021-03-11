function streetFighterSelection(fighters, position, moves){
    let hoveredCharacters = [];
    let currentPosition = position;
    for (let move of moves){
  
      if (move == 'up'){
        if(currentPosition[0] == 0){
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        } else{
          currentPosition[0]--;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        }
      }
      
      if (move == 'down'){
        if(currentPosition[0] == 1){
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        } else{
          currentPosition[0]++;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        }
      }
      
      if (move == 'left'){
        if(currentPosition[1] == 0){
          currentPosition[1] = 5;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        } else{
          currentPosition[1]--;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        }
      }
      
      if (move == 'right'){
        if(currentPosition[1] == 5){
          currentPosition[1] = 0;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        } else{
          currentPosition[1]++;
          hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
        }
      }
      
    }
    
    return hoveredCharacters;
  }

  position = [0,0] 

fighters = [     ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
                ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"] 
             ] 
moves = ['up', 'down', 'left', 'right']
  console.log(streetFighterSelection(fighters,position,moves));
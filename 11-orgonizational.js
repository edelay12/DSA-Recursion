/*
11. Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show 
the hierarchy. You may store the org chart in an object and send that as an input to your program.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/

const input = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: ["Steve", "Kyle", "Andra"],
      Zhao: ["Richie", "Sofia", "Jen"]
    },
    Schrage: {
      VanDyck: ["Sabrina", "Michelle", "Josh"],
      Swain: ["Blanch", "Tom", "Joe"]
    },
    Sandberg: {
      Goler: ["Eddie", "Julie", "Annie"],
      Hernandez: ["Rowi", "Inga", "Morgan"],
      Moissinac: ["Amy", "Chuck", "Vinni"],
      Kelley: ["Eric", "Ana", "Wes"]
    }
  }
};

function orgFormat(input) {
  this.input = Object.keys(input);
  this.string = "";

  this.setString = obj => {    
    for (let i in obj) {
        if (typeof obj[i] == 'object' || 'array') {
        
      this.string += `
        ${obj.toString()}`;
        console.log(obj[i]);
        this.setString(obj[i])
    }
    else console.log(this.string + 'final')
    }
 
}
this.setString(this.input)
}


orgFormat(input);

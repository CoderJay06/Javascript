
    // Create Dino Constructor
    /*
      attributes:
         . species :str
         . weight :number
         . height :number
         . diet :str
         . where :str
         . when :str
         . fact :str
    */
    class Dino {
       constructor(
          species,
          weight,
          height,
          diet,
          where,
          when,
          fact) {
             this.species = species;
             this.weight = weight;
             this.height = height;
             this.diet = diet;
             this.where = where;
             this.when= when;
             this.fact = fact;
       }
    }

    // Create Dino Objects
    const dino = new Dino(
       "Pteranodon",
       44,
       20,
       "carnivor",
       "North America",
       "Late Cretaceous",
       "Actually a flying reptile, the Pteranodon is not a dinosaur."
       )
   console.log(dino)
    // Create Human Object
    class Human {
        constructor(
            name,
            feet,
            inches,
            weight,
            diet
        ) {
            this.name = name;
            this.feet = feet;
            this.inches = inches;
            this.weight = weight;
            this.diet = diet;
        }
    }
    const human = new Human(
        "Joe",
        6,
        2,
        220,
        "Carnivore"
    )
    console.log(human);
    // Use IIFE to get human data from form
    // create new human object with that data 
    // save it to a variable

    function getHumanInput() {
        console.log(event.target)
        return (function() {
            let name = document.getElementById("name").innerHTML;
            let feet = document.getElementById("feet").innerHTML;
            let inches = document.getElementById("inches").innerHTML;
            let weight = document.getElementById("weight").innerHTML;
            let dietList = document.getElementById("diet");
            let diet = dietList.options[dietList.selectedIndex].value;
            console.log(diet)
        }())
    }

    function submitCompareForm() {
        // listen for submit event on form 
        const compareForm = document.querySelector(".form-container");
        compareForm.addEventListener("click", getHumanInput);
    }

    submitCompareForm();

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic

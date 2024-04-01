
// "&&"" and "||""
    // && is the equivalent of AND() in excel
    // || is the equivalent of OR() in excel

// ADD TO STRING TO EXISTING STRING
    let languages = "HTML CSS";
        languages = languages + " JS"  // using the existing string within 'languages' and then adding " JS"
        console.log(languages);  // result is now "HTML CSS JS"

// ADD ITEM TO ARRAY
    activeUsers.push("ted"); // - arrayName.push() adds ted to the array

// GET LENGTH OF ARRAY
    activeUsers.length; // arrayName.length() gets the # of entries in array

// REMOVE LAST OF THE ARRAY VALUES
    activeUsers.pop();  // arrayName.pop() removes last item in array

// COUNT TASKS
    const tasks =["dishes","windows","vacuum"];
        const length = tasks.length; // gets the length of array;
        console.log(length); // pushes array to console

// CONDITIONAL STATEMENT from .LENGTH
    const tasks1 = ["dishes", "windows", "vacuum"];
        if (tasks1.length > 0) {
        console.log("Ugh, more work!");
        }

// BASIC FOR LOOP SYNTAX
    const friends = ["Ana", "Eve", "Sam"];
    for (let i = 0; i < friends.length; i++) {  // (initialization; continuation test (aka conditional statement); update)
        console.log(friends[i]); // log the array index item when criteria met
    }

// UPDATE CERTAIN ELEMENT WITHIN ARRAY
    const missedCalls = ["Lou", "Zoe"];
        missedCalls[1] = "Lee";
        console.log(missedCalls); // prints out new value for element at index 

// MAXIMUM NUMBER OF VALUES IN AN ARRAY?
    // unlimited

// INDEX NUMBERS BY ITEM WITHIN ARRAY 
            // Indexes start at 0.    
            // ["ted", "alice", "michael"]
            // ted = 0, alice = 1, michael = 2


// REMOVE LAST ARRAY ITEM AND SAVE IT AS A NEW AND SEPERATE ELEMENT
    const doorCode = [2, 5, 0, 0, 1];
        let digit = doorCode.pop();
        console.log(digit);

// DISPLAY EVERY ELEMENT IN AN ARRAY
    const supplies = ["pencil", "book"];
        for (let i = 0; i < supplies.length; i++) {
        console.log(supplies[i]);
    }

// ADDING A CERTAIN NUMBER WHEN CONDITIONS ARE MET
    let counter = 10;
        while (counter <= 40) {
        console.log(counter);
        counter += 10;  // "+=" is the symbol for adding, then we specify "10" to be added when conditions are met
        }               // "-=" is the symbol for substracting

// ADDING ON TO A STRING with "+="
    let friends2 = "Mutual friends:";
    friends2 += " Jan,";
    friends2 += " Brett,";
    friends2 += " Michael";
    console.log(friends2);

// WHILE LOOP - BASIC EXAMPLE
    let animal = true;
    while (false) {
    console.log("false")
    }

// BASIC FUNCTION SYNTAX
    function greetUser() {    // camelCase name, establishes what the function does
        console.log("Good morning Anna");
        console.log("Welcome back");
    }

    greetUser();  // calls and runs the function

// FUNCTIONS: USING PARAMETERS
    function greet(name) {} // runs the greet function for the "name" parameter

// RETURNING SOMETHING FROM A FUNCTION
    function userAge(number) {
        const age = "User age: " + number;
        return age;   // returns the variable 
    }

// RETURN FROM FUNCTION AND PRINT TO CONSOLE
    function userAge(number) {
        const age = "User age: " + number;
        return age;  // returns a single value
    }
    console.log(userAge(22));

// RETURN FROM FUNCTION AND STORE AS VALUE
    function userAge(number) {
        const age = "User age: " + number;
        return age;  // returns a single value
    }
    const result = userAge(29);
    console.log(result);

// FUNCTION NAMING GUIDELINES
    // should include some verb at beginning (calculateDifference, sumTotal, etc)
    // similar functions should include same verb (calculateSum, sumProfit, etc)
    // boolean functions generally start with "is" (isFreezing, isEqual, etc)

//  CREATING OBJECS
    const cat = {
        name: "Garfield",   // all of these are called "properties" of the object
        favoriteFood: "lasagna",
        color: "orange",
        owner: "Jon Arbuckle"
    }

// FUNCTION THAT CHECKS TO SEE IF VARIABLES MEET CRITERIA AND PRINTS RESULT
    function checkPoints() {
        const points = 7;
        const required = 10;
        console.log("Requirement reached");
        console.log(points > required);
       }
       checkPoints();

// FUNCTION THAT COMBINES VARIABLES AND PRINTS CONCATENATED RESULT
    function movieFinder() {
        const genre = "comedy";
        const text = "Finding " + genre + " movies";
        console.log(text);
    }
    movieFinder();

// FUNCTION THAT USES PARAMETER FROM ORIGINAL FUNCTION
    function makeGerund(word) {    // word is then used in the const result below
        const result = word + "ing";
        console.log(result);
    }
    makeGerund("Jump");

// PASSING A VALUE TO THE FUNCTION
    function accomType(type) {
        const rating = "5 star";
        console.log(rating + " " + type);
    }
    accomType("hotel");  // in quotes

// ANOTHER EXAMPLE OF PASSING A VALUE TO THE FUNCTION    
    function myFunction1(type) {
        console.log(type + " is what was chosen here");
      }
      
      myFunction1("hotel")

      // Log output = "hotel is what was chosen here" 

// FUNCTION USING PARAMETERS IN ORDER
    function addToPot(first, second, third) {
        console.log("Boil " + first);
        console.log("Add " + second);
        console.log("Cook " + third);
    }
    addToPot("water", "salt", "pasta" );

// RETURN THE LENGTH OF THE ARRAY
    function getArrayLength(inputArr) {
        return (inputArr.length);
       }
       console.log("Length of array: " + getArrayLength([1, 25, 3,
        5
       ]));

// RETURN nTH ITEM IN ARRAY
    function returnZeroIndex(arr) {
        return arr[0];
    }
    console.log(returnZeroIndex([5, 6, 3, 8]));

// OBJECT PROPERTIES
    const myCat = {
        name: "sunny",    // these are the properties of the object
        intelligence: "minimal",
        hungry: "always"
    }

// OBJECT WITH A FUNCTION STORED WITHIN IT
    const dog = {
        name: "Bo",
        bark: function() {
        console.log("woof woof!");
        }
    };
    dog.bark();

// WHAT DO WE CALL FUNCTIONS INSIDE AN OBJECT?
    // the object's method

// USING "THIS" (to ONLY be used inside the object's method)
    const myCereal = {
        name: "Trix",
        changeAndDisplay: function() {
            this.name = "Cap'n Crunch";
            console.log(this.name);
        }
    };
    myCereal.changeAndDisplay();

// JSON = JavaScript Object Notation

// CONVERTING JS OBJECT INTO JSON WITH JSON.STRINGIFY() METHOD
    const concert = {
        band: "Super Carrots",
        music: "Indie"
    };
    console.log(concert);
    console.log(JSON.stringify(concert));

       // result:  { band: 'Super Carrots', music: 'Indie' }
       //          {"band":"Super Carrots","music":"Indie"}

// CONVERTING JSON INTO JS OBJECT with JSON.PARSE() METHOD
    const doggo = '{"name" : "Rocko": "age" : 3}'
    console.log(JSON.parse(doggo));


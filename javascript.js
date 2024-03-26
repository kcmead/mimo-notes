
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

// FOR LOOP
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


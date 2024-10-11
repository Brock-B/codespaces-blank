"use strict";
//The complex conditions:
var readlineSync = require('readline-sync');

// DO NOT EDIT: The main function to house our program code 
function main()
{
    // enter your code here
    var stdGrade = parseFloat(readlineSync.question("Enter the student grade: "));
    console.log("")
    if (stdGrade = A) 
    {
        //True
        console.log("4.0");

    }


    console.log("")
    if (stdGrade = B) 
    {
        //True
        console.log("3");

    }

    if (stdGrade = C) 
        {
            //True
            console.log("2");
    
        }

    if (stdGrade = D) 
    {
        //True
        console.log("1");

    }    
    if (stdGrade = F) 
        {
            //True
            console.log("0");
    
        }
    else
    {
        //Else or False part
        console.log("You fail");

    } 
    {
        //True Part
        console.log("Invalid");
    }
    console.log("Finish")

}

// DO NOT EDIT: Trigger our main function to launch the program
if (require.main === module)
{
    main();
}
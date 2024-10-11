"use strict";

var readlineSync = require('readline-sync');

function main()
{
    var stdGrade = parseFloat(readlineSync.question("Enter the student grade: "));
    console.log("")
    if (stdGrade = A) 
    {
        console.log("4.0");

    }


    console.log("")
    if (stdGrade = B) 
    {
        console.log("3");

    }

    if (stdGrade = C) 
        {
            console.log("2");
    
        }

    if (stdGrade = D) 
    {
        console.log("1");

    }    
    if (stdGrade = F) 
        {
            console.log("0");
    
        }
    else
    {
        console.log("You fail");

    } 
    {
        console.log("Invalid");
    }
    console.log("Finish")

}


if (require.main === module)
{
    main();
}
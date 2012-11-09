
/*
 * Sources:
 *
 * Arrays in JavaScript: http://www.virtualmv.com/wiki/index.php?title=JavaScript:Arrays
 * Checkboxes in HTML: http://www.w3schools.com/html/tryit.asp?filename=tryhtml_checkbox
 * Checkbox default value and return value: http://www.echoecho.com/htmlforms09.htm
 * DND dice roller: http://www.wizards.com/dnd/dice/dice.htm
 * Math.random() function: http://www.javascriptkit.com/javatutors/randomnum.shtml
 * Using "var" vs. not using "var": http://stackoverflow.com/questions/1470488/difference-between-using-var-and-not-using-var-in-javascript
 *
 */

function roll(number, dieValue)
{
    var rollTotal = 0;
    
    for (i=0; i<number; i++)
    {
        rollTotal += Math.floor(Math.random()*dieValue + 1);
    }
    
    return rollTotal;
}

function testArrays()
{
    // Debugging:
    //document.write("a");
    var dice_array = new Array(4);
    for (i=0; i<4; i++)
    {
        dice_array[i] = (Math.floor(Math.random()*6 + 1));
        //dice_array[i] = roll(2,6);
        document.write("<br>dice_array["+i+"]= "+dice_array[i]);
    }
    dice_array = dice_array.sort();
    document.write("<br><br>Sorted:<br><br>");
    for (i=0; i<4; i++)
    {
        document.write("<br>dicearray["+i+"]= "+dice_array[i]);
    }
    dice_array = dice_array.reverse();
    document.write("<br><br>Reversed:<br><br>");
    for (i=0; i<4; i++)
    {
        document.write("<br>dice_array["+i+"]= "+dice_array[i]);
    }
    // Debugging:
    //document.write("b");
}


/*
 * paulsdice.js
 *
 * Created by Paul Kaefer, November 2012
 *
 * Sources:
 *
 * Arrays in JavaScript: http://www.virtualmv.com/wiki/index.php?title=JavaScript:Arrays
 * Checkboxes in HTML: http://www.w3schools.com/html/tryit.asp?filename=tryhtml_checkbox
 * Checkbox default value and return value: http://www.echoecho.com/htmlforms09.htm
 * Determine if checkbox is checked or not (in JavaScript): http://stackoverflow.com/questions/9887360/check-if-checkbox-is-checked-javascript
 * DND dice roller: http://www.wizards.com/dnd/dice/dice.htm
 * Math.random() function: http://www.javascriptkit.com/javatutors/randomnum.shtml
 * Read-only text areas: http://www.velocityreviews.com/forums/t156278-textarea-uneditable.html
 * Simple HTML buttons: http://www.w3.org/TR/html401/interact/forms.html#h-17.4.2
 * Sorting arrays in JavaScript: http://www.javascriptkit.com/javatutors/arraysort.shtml
 * Using "var" vs. not using "var": http://stackoverflow.com/questions/1470488/difference-between-using-var-and-not-using-var-in-javascript
 *
 */

function rollDice(number, dieValue)
{
    var rollTotal = 0;
    
    for (i=0; i<number; i++)
    {
        rollTotal = rollTotal + Math.floor(Math.random()*dieValue + 1);
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

function rollNdX()
{
    number = parseInt(document.form1.numberOfDice.value);
    dieValue = parseInt(document.form1.dieValue.value);
    
    currentRoll = 0;
    total = 0;
    outputText = "";
    
    clearOutputBox();
    
    for (i=0; i < number; i++)
    {
        currentRoll = Math.floor(Math.random()*dieValue + 1);
        outputText = outputText + currentRoll.toString();
        if (i < (number - 1))
        {
            outputText += ",";
        }
        total = total + currentRoll;
    }
    
    outputText = "Rolled "+number.toString()+"d"+dieValue.toString()+"\nRolls: "+outputText+"\n--------------------\nTotal: "+total.toString();
    
    document.form1.output.value = outputText;

}

function rollXkY()
{
    numToRoll = parseInt(document.form1.numToRoll.value);
    numToKeep = parseInt(document.form1.numToKeep.value);
    explodeValue = parseInt(document.form1.explodeValue.value);
    explodeAllowed = document.form1.exploding.checked;// returns true or false
    
    outputText = "";
    
    clearOutputBox();
    
    outputText = "Rolling "+numToRoll.toString()+"k"+numToKeep.toString()+", exploding on "+explodeValue.toString()+".";
    
    document.form1.output.value = outputText;
}

function clearOutputBox()
{
    document.form1.output.value = "";
}


/*
 * paulsdice.js
 *
 * Created by Paul Kaefer, November 2012
 *
 * Sources consulted:
 *
 * Arrays in JavaScript: http://www.virtualmv.com/wiki/index.php?title=JavaScript:Arrays
 * Checkboxes in HTML: http://www.w3schools.com/html/tryit.asp?filename=tryhtml_checkbox
 * Checkbox default value and return value: http://www.echoecho.com/htmlforms09.htm
 * Determine if checkbox is checked or not (in JavaScript): http://stackoverflow.com/questions/9887360/check-if-checkbox-is-checked-javascript
 * DND dice roller: http://www.wizards.com/dnd/dice/dice.htm
 * Integer sort instead of string sort: http://stackoverflow.com/questions/1063007/sort-not-working-with-integers
 * Math.random() function: http://www.javascriptkit.com/javatutors/randomnum.shtml
 * Read-only text areas: http://www.velocityreviews.com/forums/t156278-textarea-uneditable.html
 * Simple HTML buttons: http://www.w3.org/TR/html401/interact/forms.html#h-17.4.2
 * Sorting arrays in JavaScript: http://www.javascriptkit.com/javatutors/arraysort.shtml
 * Using "var" vs. not using "var": http://stackoverflow.com/questions/1470488/difference-between-using-var-and-not-using-var-in-javascript
 *
 */

var TEXT_AREA_MAX_CHARS = 210;

function clearOutputBox()
{
    document.form1.output.value = "";
}
 
function rollDice(number, dieValue)
{
    var rollTotal = 0;
    
    for (i=0; i<number; i++)
    {
        rollTotal = rollTotal + Math.floor(Math.random()*dieValue + 1);
    }
    
    return rollTotal;
}

// By default, JavaScript's Array.sort() method sorts
// values as strings. This means that 9, 1, 10 will sort to 1, 10, 9.
//
// This function will allow for integer sort.
function compareNumbers(a, b)
{
    return a - b;
}

function rollNdX()
{
    number = parseInt(document.form1.numberOfDice.value);
    dieValue = parseInt(document.form1.dieValue.value);
    
    outputText = "";
    
    //clearOutputBox();
    
    if (number == 1)
    {
        roll = Math.floor(Math.random()*dieValue + 1);
        outputText = "You rolled a " + roll.toString() + "."
        
        // Append "You rolled a __." to the current outputText, unless it has length > 100:
        if (( ((document.form1.output.value).length) > TEXT_AREA_MAX_CHARS) || ( ((document.form1.output.value).length) == 0))
        {
            document.form1.output.value = outputText;
        }
        else
        {
            outputText = document.form1.output.value + "\n" + outputText;
            document.form1.output.value = outputText;
        }
        
        return;
    }
    
    clearOutputBox();
    
    currentRoll = 0;
    total = 0;
    
    maximumRoll = 0;
    minimumRoll = dieValue + 1;
    
    for (i=0; i < number; i++)
    {
        currentRoll = Math.floor(Math.random()*dieValue + 1);
        outputText = outputText + currentRoll.toString();
        
        if (currentRoll > maximumRoll) {
            maximumRoll = currentRoll;
        }
        
        if (currentRoll < minimumRoll) {
            minimumRoll = currentRoll;
        }
        
        if (i < (number - 1))
        {
            outputText += ",";
        }
        total = total + currentRoll;
    }
    
    outputText = "Rolled " + number.toString() + "d" + dieValue.toString()
               + "\nRolls: " + outputText
               + "\n--------------------\nMaximum roll: " + maximumRoll.toString()
               + "\nMinimum roll: " + minimumRoll.toString()
               + "\nTotal: " + total.toString();
    
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
    total = 0;
    
    var rolls = new Array(numToRoll);
    
    for (i=0; i < numToRoll; i++)
    {
        rolls[i] = (Math.floor(Math.random()*explodeValue + 1));
        outputText = outputText + rolls[i].toString();
        if (i < (numToRoll - 1))
        {
            outputText += ",";
        }
    }
    
    outputText = "Raw rolls: " + outputText;
    
    // Sort the rolls in descending order:
    rolls = rolls.sort(compareNumbers);
    rolls = rolls.reverse();
    
    // Append sorted rolls to outputText:
    outputText = outputText + "\nSorted Rolls: ";
    for (i=0; i < numToRoll; i++)
    {
        outputText = outputText + rolls[i].toString();
        if (i < (numToRoll - 1))
        {
            outputText += ",";
        }
    }
    
    if (explodeAllowed == false)
    {
        // No explodes allowed

        // calculate sum:
        for (i=0; i < numToKeep; i++)
        {
            total += rolls[i];
        }
        outputText = "Rolled " + numToRoll.toString()+"k"+numToKeep.toString()+", with no explodes.\n--------------------\n" + outputText + "\n--------------------\nTotal: " + total;
    }
    else // exploding dice are allowed
    {
        // print out raw rolls & sorted
        // calculate with explodes
        // print out grand total
        for (i=0; i < numToKeep; i++)
        {
            total += rolls[i];
            if (rolls[i] == explodeValue)
            {
                // Explosion handling:
                outputText = outputText + "\nExplosion!";
                newRoll = (Math.floor(Math.random()*explodeValue + 1));
                outputText += " +"+newRoll.toString();
                total += newRoll;
                while (newRoll == explodeValue)
                {
                    newRoll = (Math.floor(Math.random()*explodeValue + 1));
                    total += newRoll;
                    outputText += " +"+newRoll.toString();
                }
            }
        }
        outputText = "Rolled " + numToRoll.toString()+"k"+numToKeep.toString()+", with explodes.\n--------------------\n" + outputText + "\n--------------------\nTotal: " + total;        
    }
     
    //outputText = "Rolling "+numToRoll.toString()+"k"+numToKeep.toString()+", exploding on "+explodeValue.toString()+".";
    
    document.form1.output.value = outputText;
}

function flipCoin()
{
    //clearOutputBox();
    coin = (Math.floor(Math.random()*2));
    
    if (coin==0)
    {
        outputText = "You flipped heads.";
    }
    else if (coin==1)
    {
        outputText = "You flipped tails.";
    }
    else
    {
        // If something went wrong...
        outputText = "Something other than heads/tails was flipped.";
    }

    // Length of text in output box: ((document.form1.output.value).length)
    // add .toString() to print it out
    if (( ((document.form1.output.value).length) > TEXT_AREA_MAX_CHARS) || ( ((document.form1.output.value).length) == 0))
    {
        document.form1.output.value = outputText;
    }
    else
    {
        outputText = document.form1.output.value + "\n" + outputText;
        document.form1.output.value = outputText;
    }
}

/* Sources consulted for the Dreidel function:
    - http://en.wikipedia.org/wiki/Dreidel
    - http://en.wikipedia.org/wiki/Hebrew_alphabet
    - http://en.wikipedia.org/wiki/Unicode_and_HTML_for_the_Hebrew_alphabet
*/
function rollDreidel()
{
    //clearOutputBox();
    var roll = (Math.floor(Math.random()*4));
    
    var dreidel = ["\u05E0 - Nun - do nothing", "\u05D2 - Gimel - take everything", "\u05D4 - Hei - take half (rounded up)", "\u05E4/\u05E9 - Shin/Pei - put one in"]
    
    var outputText = dreidel[roll];

    // Length of text in output box: ((document.form1.output.value).length)
    // add .toString() to print it out
    if (( ((document.form1.output.value).length) > TEXT_AREA_MAX_CHARS) || ( ((document.form1.output.value).length) == 0))
    {
        document.form1.output.value = outputText;
    }
    else
    {
        outputText = document.form1.output.value + "\n" + outputText;
        document.form1.output.value = outputText;
    }
}

function drawCard()
{
    var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
    var suits = ["hearts", "spades", "diamonds", "clubs"];
    
    var card = (Math.floor(Math.random()*13));
    var suit = (Math.floor(Math.random()*4));
    
    var outputText = cards[card] + " of " + suits[suit];
    
    // Length of text in output box: ((document.form1.output.value).length)
    // add .toString() to print it out
    if (( ((document.form1.output.value).length) > TEXT_AREA_MAX_CHARS) || ( ((document.form1.output.value).length) == 0))
    {
        document.form1.output.value = outputText;
    }
    else
    {
        outputText = document.form1.output.value + "\n" + outputText;
        document.form1.output.value = outputText;
    }
}

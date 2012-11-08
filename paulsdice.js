
/*
 * Sources:
 *
 * Math.random() function: http://www.javascriptkit.com/javatutors/randomnum.shtml
 * Using "var" vs. not using "var": http://stackoverflow.com/questions/1470488/difference-between-using-var-and-not-using-var-in-javascript
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


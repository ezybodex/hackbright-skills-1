///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

let totalAcres = 0; // to get totalAcres, I need to set this to 0 and add total for all categories to it.

for (let i = 0; i < fujiAcres.length; i++) {
  totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];
}

// console.log('Total Acres Picked: ', totalAcres);





// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

const averageDailyAcres = totalAcres/7 // since there are 7days in a week, simply dividing total acres by 7 to get the average per day
// console.log('Average number of acres per day:', averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

const dailyAverage =  9

// -= reduces the number of acres left
while (acresLeft > 0) {
  days += 1;
  acresLeft -= dailyAverage;
}

// console.log('Number of Days Needed: ', days);



// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/


let fujiTons = [];
let galaTons = [];
let pinkTons = [];
const tonsPerAcre = 6.5;

// here, I would pick each item on the arrays for each category and multiply by the value of tons per acre which is 6.5
for (let i = 0; i < fujiAcres.length; i++) {
  fujiTons.push(fujiAcres[i] * tonsPerAcre); 
  galaTons.push(galaAcres[i] * tonsPerAcre);
  pinkTons.push(pinkAcres[i] * tonsPerAcre);
}

// console.log('Daily Fuji Apple Quantity in Tons:', fujiTons);
// console.log('Daily Gala Apple Quanity in Tons:', galaTons);
// console.log('Daily Pink Apple Quantity in Tons:', pinkTons);


// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

let totalFujiPounds;
let totalGalaPounds;
let totalPinkPounds;
const poundsPerTon = 2000;

// To calculate the total pounds for each variety
totalFujiPounds = fujiTons.reduce((total, tons) => total + tons, 0) * poundsPerTon;
totalGalaPounds = galaTons.reduce((total, tons) => total + tons, 0) * poundsPerTon;
totalPinkPounds = pinkTons.reduce((total, tons) => total + tons, 0) * poundsPerTon;

// console.log('Total Fuji Pounds:', totalFujiPounds);
// console.log('Total Gala Pounds:', totalGalaPounds);
// console.log('Total Pink Pounds:', totalPinkPounds);



// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55


// To calculate profits for each variety
let fujiProfit = totalFujiPounds * fujiPrice / 100; // Since there are 100cents in a dollar, this helps convert price from cents to dollars
let galaProfit = totalGalaPounds * galaPrice / 100;
let pinkProfit = totalPinkPounds * pinkPrice / 100;

// console.log('Fuji Profit:', fujiProfit);
// console.log('Gala Profit:', galaProfit);
// console.log('Pink Profit:', pinkProfit);



// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let totalProfit = fujiProfit + galaProfit + pinkProfit
console.log('Total Profit is:', totalProfit.toFixed(2)) // toFixed(2) makes totalProfit 2 decimal places - https://stackoverflow.com/questions/67277547/how-to-make-2-decimals-place-in-javascript 
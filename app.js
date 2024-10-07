                                //chapter 31 to 34
                                //DATE METHODS

//q1.
var date = new Date();
console.log(date);                                

//q2.
var month= new Date();
var arr = ["Jan","Feb","March","April","May","June","July","August","September","October","November","December"]
var currentMonth= (arr[month.getMonth()]);
alert(`Current Month: ${currentMonth}`)

//q3.
var day= new Date();
var arr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var currentDay= (arr[day.getDay()]);
var Day=(currentDay.slice(0,3))
alert(`Today is: ${Day}`)

//q4.
var today= new Date();
var day= today.getDay();
if(day=== 0 ||day===6){
    console.log(" It's Fun day")
}
else {
    console.log("It's a regular day");
}

//q5.
var date= new Date();
var currentDate= date.getDate()

if (currentDate< 16){
    console.log("First fifteen days of the month")
}
else{
    console.log("Last days of the month.")
}

//q6.
var today= new Date();
var milliSecond= today.getTime()
var minutes = milliSecond/(1000*60)
console.log("Current Date:" + today)
console.log("Ellapsed milliSeconds since January 1,1970:" + " " + milliSecond)
console.log("Ellapsed minutes since January 1,1970:"+" "  +minutes)

//q7.
var currentTime = new Date();
var hours = currentTime.getHours();

if(hours < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

//q8.
var date = new Date("December,31,2024");
console.log("Later date:"+ " "+date);                                

//q9.
var ramadan= new Date("march,11,2024");
var currentDate= new Date();
var timeDiffer= currentDate-ramadan;
var daysPast = Math.floor(timeDiffer / (1000 * 60 * 60 * 24));
alert("Number of days past since 1st Ramadan: " +daysPast)

//q10.
var referenceDate = new Date(2024, 10, 7);
var startOf2024 = new Date(2024, 0, 1); 
var timeDifference = referenceDate - startOf2024;

var secondsElapsed = Math.floor(timeDifference /1000 );

document.write("Seconds elapsed between the reference date and the beginning of 2024: " + secondsElapsed);

//q11.
var date = new Date();
console.log("current date:"+date)

date.setHours(date.getHours() - 1);
console.log("Date one hour ago: " + date);

//q12.
var date =new Date()
console.log("current date:"+" "+ date)

var date= new Date("Dec, 5,1915")
console.log("100 years back:"+ " "+date) 

//q13.
var userAge= prompt("Enter your birth year")
var date = new Date();
var age= (date.getFullYear()- userAge)
document.write(`Your age is ${age} <br> Your birth year is ${userAge}`)

//q14.

var customerName = prompt("Enter customer name:");
var currentMonth = prompt("Enter current month:");
var numberOfUnits = parseFloat(prompt("Enter number of units:"));
var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));

var netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
var latePaymentSurcharge = 350; 
var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

document.write(`<h1>K-Electric Bill</h1> <br> <br>
 customerName:${customerName} <br>
 currentMonth:${currentMonth} <br> 
 numberOfUnits: ${numberOfUnits} <br>
 chargesPerUnit: ${chargesPerUnit}<br>
Net Ammount payable (within due date)${netAmount} <br>
Late payment surcharge: ${latePaymentSurcharge} <br>
Gross Amount payable(after due date)${grossAmount}`);

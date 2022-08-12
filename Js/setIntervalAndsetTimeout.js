// when you want to run the some function at differ-2 time then use both these function
// setTimeout --> Alllows us to run the function once after the interval of time
// clearTimeout --> Alllows us to run the function repeatedly after the interval of time

function greet(name,byetxt){
    console.log("Good Morning "+name+" "+byetxt);
}

// you can pass multiple argument to this function and it return timeOut id
timeOut = setTimeout(greet,5000,"Yash","Take care"); //5000ms = 5sec

// setTimeout(greet(), 12000); --> Wrong as it is calling the function inside setTimeout

console.log(timeOut); // print id of above timeout
// example :- sign message popup after some time on website  but if user signup before the time so you have to clear the timeout before message pop up
clearTimeout(timeOut);


// setInterval

IntervalId = setInterval(greet,5000,"yash","bye tc");
console.log(IntervalId);
clearInterval(IntervalId);


// show time on websites
function displayTime(){
    time = new Date();
    // console.log(time);
    document.getElementById('Time').innerHTML = time;
}

setInterval(displayTime,1000);
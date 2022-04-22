const date = new Date();
console.log(date);
var month= date.getMonth();
console.log(month);
//var nextmonth = month+1;
const yyyy= date.getFullYear();
console.log(yyyy);
const day=date.getDay();
console.log(day);
            
   // const days_month=[31,febDays,31,30,31,30,31,31,30,31,30,31];
    const name_Days=["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const day_Week=[0,1,2,3,4,5,6];
    var month_number= [0,1,2,3,4,5,6,7,8,9,10,11];
    console.log(month_number);
    const namesMonth=["January","Febuary", "March", "April", "May", "June", "July", "August", "September", "October",
                       "November","December"];

//display name of the month and year         
const nameofmonth=document.querySelector(".monthname");      

for (var n=0; n<=11;n++){
if(month_number[n]=== month)
{
 nameofmonth.innerHTML= `<div>  
    <h1>
 ${namesMonth[month]}  ${yyyy} </h1> 
    
    </div>`
} 
}

const namesofdays=document.querySelector("calendar-weekDays");
let nod=" ";
for (var j=0; j<=6;j++){
    nod+=  `<div ${name_Days[j]} </div>`
    namesofdays.innerHTML=nod;
    }
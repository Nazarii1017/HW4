//task1
function calcRectangleArea(width, height) {
  if (isNaN(width||height) {
    return ("Sorry, wrong value")
  } else {
    width*height;
  }
}
//task 2
var age = prompt("Enter your age");
var name = prompt("Enter your name");
function checkAge(age, name) {
  if(age < "14") {
    return ("Sorry, " + name + "you are too young to use our website");
  } 
  if(isNaN(age)){
return ("Sorry," + name + "wrong age value");
  }
  if(name /= String){
    return ("Sorry, " + name + "wrong name value") // тут виправити, зробити так шо якшо не букви то вронг велю
  }
  else {
    return ("Welcome, " + name + "!");
  }
  
}
alert(checkAge(age,name));
/*var output = checkAge(age, name);
console.log(output);*/

//task 3
class MonthException {
  constructor(message) {
      this.message = message;
      this.name = 'MonthException';
  }
}
function showMonthName(month) {
  month = month - 1; // array numeration
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            if (months[month] !== undefined) {
                return months[month];
            } else {
              return "Wrong month value";
          }
      }

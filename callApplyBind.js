//call
let userDetails = {
    name: "Karan",
    Age : 21,
    Designation : "Software Engineer",
    printDetails : function(city,country){
        console.log(this.name + " "+ this.Age +" "+this.Designation + " from " + city + " " + country);
    }
}
// userDetails.printDetails();
let userDetails1 = {
    name: "Shubham",
    Age : 25,
    Designation : "Software Engineer",
    
}
//the first parameter in call function is reference to the object and from second onwards they are paramtere toh the function which is called.
userDetails.printDetails.call(userDetails1);
userDetails.printDetails.apply(userDetails1);

//using parameter
userDetails.printDetails.call(userDetails1,"Mumbai","India");
userDetails.printDetails.apply(userDetails1,["Delhi", "India"]);





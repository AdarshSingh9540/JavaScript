let User = {
    Fname:"Adarsh",
    Lname:"Singh",
    // printFullName: function(){
    //     console.log(this.Fname+ " "+this.Lname);
    // }
}

let printFullName = function(city,country){
    console.log(this.Fname+ " "+this.Lname+" "+city+","+country);
}

// User.printFullName();
printFullName.call(User)

let User2={
    Fname:"Aadi",
    Lname:"Kumar"
}

// function borrowing 
printFullName.call(User2,"Delhi","India") ;

printFullName.apply(User2,["Delhi","India"]) 

let FllName= printFullName.bind(User2,"Delhi","India") ;

FllName(User2)
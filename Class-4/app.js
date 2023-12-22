// objects
var student = {
    name: 'Rohan',
    email: 'amit@email.com',
    regNo: 12345,
    enroll: true,
    logIn() {
        console.log(this.name, "Welcome your loggedIn")
    }
    
};

console.log(student.logIn);

// calling the funtion which is inside property
student.logIn();




// Add new Property to object
student.isLogin = false;
console.log("Object & its propoerties :", student)

// accessig properties
console.log(student['name']); // this is more convenient BECAUSE INSIDE '' WE ARE PUTTING A TEXT 

console.log(student.name);



// dynamically addmin object propertys to the html file
// as the tag ID and name of objects property is same we can use the object [] bracket access techinque 
var span = document.querySelector('#name'); //selecting property by class name
console.log(span.id);
span.textContent = student[span.id]; //here span.id will get the id of tag having name "name" which is same as student property "name"

var reg = document.querySelector('#regNo');
reg.textContent = student[reg.id]; // SO THE reg.id WILL GIVE IT A TEXT


var ary = ['one', 'two', 3];
console.log(ary);
console.log("Type of array is", typeof ary);

var str = new String('Something is written');
console.log("Type of new String() is", typeof str);

var bol = new Boolean(true);
console.log("Type of new Boolean() is", typeof bol);


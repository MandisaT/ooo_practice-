

// Creating objects using
// object literal
// constructor function
// Creating instances of objects
// accessing object attributes and methods
// prototypical objects

// 1
// a. object literal

var foodForclass ={
breakfast : "oatmeal",
snack :"almonds & raisins",
lunch : " rice , kale and lentils",
snack : "chips",
dinner : "rice , greens, lentils", 
snack : "chips"

}


// b. constructor function 

function Kitchen( cabinets, fireplace , stove){
this.cabinets = cabinets ;
this.fireplace = fireplace ;
this.stove = stove ; 

}
//c. accessing object methods 
var fancy_kitchen = new Kitchen ("Marble countertop" ,"
Napoleon NZ6000" , "Kitchen-aid")


// d. prototype


function Housing (apartment , house){

	this.apartment = apartment ;
	this.house = house ;
}

my_home = new Housing(" down south "," up north ");

Housing.prototype.living = function(){
	return " trying to decide where i should live "  + this.apartment +" or " + this.house
}

my_home.living()


// 2. Write a method that lists the properties of a JavaScript object.

var foodParty = {
drinks : "presseco , merlot , jack daniel ",
appetizers:"spinach dip ,calamari",
dinner: "pasta , marina sauce , garlic bread ",
dessert : "chocolate cake , marble cake"
}
for(var prop in foodParty){

console.log(prop+foodParty[ prop]);

}


// 3. Create an object called Multiplier with
//  two methods: multiply and getCurrentValue. multiply should initially return 
//  the number supplied * 1 and from then on whatever the current value 
// is times the number supplied. getCurrentValue should return the last answer returned from multiply.

var Multiplier = function(){

	var current = 1;
	// global variable setting the multiply as a number  
	this.multiply =  function(x){
		// the number that you to multipler times 1 
		current = current * x;
		return current;
		// returning current value 
	}
	
	this.getCurrentValue =  function(){
		return current;
	}
}


m = new Multiplier();

m.multiply(9)
m.getCurrentValue()
// first your setting the current value as 9 
m.multiply(4)
// now current value is 9  so multiply function will be 9*4
m.getCurrentValue()
// new current value is 36

// 4.Implement an object model 
// that allows you to store strings that represent a Photo. 
// Your model should include an Album object 
// that can contain many Photo objects in its photos attribute.
//  Each Album should allow you to add a new photo, list all photos, 
// and access a specific photo by the order it was added. 
// Each Photo should tell you the photo's file name and the location the photo was taken in.
//  Create instances of each object defined to prove that your object model works.


function Album(){
this.photos = []
// empty array to add photos too 
	this.addphotos = function(photos){
		 this.photo.push(photos);
		// adding photos  to the empty array aka album 
		return photos  
	}


	this.list_photo =function(){
	return this.photos
		// returning the list of photos
	}

	this.get_photo =function(y){
	return this.photos[y];
		// adding photos to the new album via the  y paramters  
	}

	function Photo(location,filename){
	this.location = location;
	this.filename = filename;
	}
 }
// new instances of the photos
// name location 
var my_photo = new Photo ("mountain.jpeg","CampingTrip");
// creating pictures with filename and location
var my_photo2 = new Photo ("beach.jpeg","Vacation");
var my_album  = new Album ();
// creating the album with all information 
my_album.addphotos(my_photo); 
my_album.addphotos(my_photo2);
my_album.get_photo(2);  
// printing out the second album 
// add a new photo =  not sure 
	
// 5.
// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers.
//  Make sure to write code afterwards that creates instances of these objects to make sure that 
//  what you've written works well and you're able to store the necessary data in each object.

function Person(fname,lname){
	this.fname = fname;
	this.lname = lname;
	this.create_ting = function(){
		this.fname + this.lname ;
	}
}
// the instance will take in whatever we are passing in 

function Teacher () {
	this.department = arguments[2]
	this.classroom = arguments[3]
	Person.apply(this, arguments);
	}

function Student(){
	this.major = arguments[2] 
	Person.apply(this, arguments);
}

Teacher.prototype = new Person();
Student.prototype = new Person();

function School(){
	this.teacher=[] ;
	this.student=[] ;

this.get_teacher =function(teacher){
	this.teacher.push(teacher);
	
	};

this.get_student = function(student){
	this.student.push(student);
	
	};

}

var my_teacher = new Teacher ("Dr" ,"Jayne" ,"Anthropology" ,"Douglass Hall");
var mandisa = new Student ("mandisa", "thomas", "Biology");
var my_school = new School ();
my_school.get_student(mandisa); 
my_school.get_teacher(my_teacher);
`
console.log("Hello from objects.js");
//this is a js example of inheritence and protypes with data hiding and delegation

//constructor
function Dog() {
    var sound = "bark";
    var type = "dog";
    var legs = 4;
    var size = "medium";
    
    this.speak = function() { console.log(sound);};
    //accessors for data hiding
    this.getSound = function() { return sound; };
    this.getType = function() { return type; };
    this.getLegs = function() { return legs; };
    this.setLegs = function(value) { legs = value; };
    this.getSize = function() { return size };
}

//Dalmation will inherit properties of the above Dog()
Dalmation.prototype = new Dog();

//constructor with dalmation class
function Dalmation() {
    var color = "white with black spots";
    var parent = new Dog();
    
    //accessor for data hiding with setLegs and getLegs delegating to parent
    this.setLegs = function(value) { parent.setLegs(value); };
    this.getLegs = function(value) { return parent.getLegs(); };
    this.getColor = function() { return color; };
}

//this prototype inherits from Dog()
SmallDog.prototype = new Dog();

//constructor for a small dog
function SmallDog() {
    var size = "small";
    var parent = new Dog();
    
    //accessors for data hiding with setLegs and getLegs delegating to parent
    this.setLegs = function(value) { parent.setLegs(value); };
    this.getLegs = function(value) { return parent.getLegs(); };
    this.getSize = function () { return size; };
}

//this prototype will inherit from Dalmation() as well as Dog()
PuppyDalmation.prototype = new Dalmation();
SmallDog.call(PuppyDalmation.prototype);

//constructor with puppy dalmation
function PuppyDalmation() {
    var parent = new Dalmation();
    
    //accessors for data hiding with setLegs and getLegs delegating to parent
    this.setLegs = function(value) { parent.setLegs(value); };
    this.getLegs = function(value) { return parent.getLegs(); };
    //the property below is no longer needed now that SmallDog.call is created
    //this.size = "small";
}
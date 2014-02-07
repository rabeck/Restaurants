$(document).on('ready', function(){

// Constructor Definitions

// FoodItem CONSTRUCTOR
//
//

	var FoodItem= function(foodItemArgs){
		this.foodName = foodItemArgs.name;
		this.calories = foodItemArgs.calories;
		this.isVegan = foodItemArgs.isVegan || false;
		this.gultenFree = foodItemArgs.gultenFree || false;
		this.citrusFree = foodItemArgs.citrusFree || false;

	};
	FoodItem.prototype.toString = function(){
		return $("<p>" + this.foodName + "<br>Calories: " + this.calories + "<br>Vegan: " + this.vegan || null + "<br>Gluten Free: " + this.gultenFree || null + "<br>Citrus Free: " + this.citrusFree || null + "</p>");
	};
	
	FoodItem.prototype.create = function(foodDescription) {
		$("#menu").append(foodDescription);
	};

var beans = new FoodItem({foodName:"beans", calories:100, isVegan:true, gultenFree:true, citrusFree:true});

var rice = new FoodItem({foodName:"rice", calories:100, isVegan:true, gultenFree:true, citrusFree:true});

var cheese = new FoodItem({foodName:"cheese", calories:100, gultenFree:true, citrusFree:true, isVegan:false});

//
//	drink CONSTRUCTOR
//
	
	var drink = function(dinkArgs){
		this.drinkName = drinkArgs.name;
		this.description = drinkArgs.description;
		this.price = drinkArgs.price;
		this.ingredients = dinkArgs.ingredients;
	};
	drink.prototype.toString = function(){
		return $("<p>" + this.drinkName + "<br>Description: " + this.description + "<br>Price: " + this.price || null + "<br>Ingredients: " + this.ingredients || null + "</p>");
	};



	drink.prototype.create = function(drinkDescription){
		$("#menu").append(drinkDescription);

	};

//
//	plate CONSTRUCTOR
//

	var plate = function(plateArgs){
		this.plateName = plateArgs.plateName;
		this.description = plateArgs.description;
		this.price = plateArgs.price;
		this.ingredients = plateArgs.ingredients;
	};

	plate.prototype.toString = function(){
		var htmlStr = "";
			for (var i=0; i<arguments.length; i++) {
				htmlStr += this[i].plateName + "<br>Description: " + this[i].description + "<br>Price: " + this[i].price || null + "<br>Ingredients: " + this[i].ingredients || null;				
			};
		return $("<p>" + htmlStr + "</p>")
		};

	plate.prototype.create = function(){
		console.log(this.ingredients.foodName);
		console.log(this.ingredients[0]);
		for (var i = 0; i<this.ingredients.length; i++) {
			$("#menu").append(this.ingredients.foodName);
		};
	};

	plate.prototype.isVegan = function() {
		var output = true;
		console.log(this.ingredients[2].isVegan);
		for (var i =0; i<this.ingredients.length; i++) {
			if (this.ingredients[i].isVegan === false) {
				output = false;}
		}
		console.log(output);
		return output;
	};

var burrito = new plate({plateName:"Burrito", description:"a cheesy delight", price:"999.99", ingredients:[beans, rice, cheese]});

burrito.create(burrito.toString());
console.log(burrito.toString());
console.log(burrito.isVegan());

//
//	order CONSTRUCTOR
//	

	var order = function(orderArgs){
		var plates = [];
		for(var i = 0; i < orderArgs.length; i++){
			plates.push(plate[i]);		
		}
		return plates;	
	};

	order.prototype.toString = function(){
			for (var i=0; i<orderArgs.length; i++) {
				return $("<p>" + this[i].plateName+ "<br>Description: " + this[i].description + "<br>Price: " + this[i].price || null + "<br>Ingredients: " + this[i].ingredients || null + "</p>");
			};
		};

//
//	MenuDescription CONSTRUCTOR
//

	var menuDescription= function(menuArgs){
		var menu = [];
		for(var i = 0; i < menuArgs.length; i++){
			menu.push(menuDescription[i]);		
		}	
		return menu;
	};

	menuDescription.prototype.toString = function(){
		var htmlStr = "";
			for (var i=0; i<menuDescriptionArgs.length; i++) {
				htmlStr += this[i].plateName + "<br>Description: " + this[i].description + "<br>Price: " + this[i].price || null + "<br>Ingredients: " + this[i].ingredients || null;				
			};
		return $("<p>" + htmlStr + "</p>")
		};

//
//	Restaurant CONSTRUCTOR
//

	var Restaurant= function(restArgs){
		var Restaurants = [];
		for(var i = 0; i < restArgs.length; i++){
			Restaurants.push(restaurant[i]);		
		}	
		return Restaurants;
		};

//
//	CustomerDiet CONSTRUCTOR
//

	var CustomerDiet = function() {
		this.FoodItems = arguments;
	};

	// CustomerDiet.prototype.toString = function(){
	// 			return $("<p>" + "Dietary Restrictions: " + this[i].foodName); 
	// 		};

	// CustomerDiet.prototype.create = function(args){
	// $("#menu").append(args);
	// };
		




// DOM Manipulation






// var susansDiet = new CustomerDiet(beans,cheese);

// susansDiet.create(susansDiet.toString());







});	









































	
// Tanner McDaniel
// 3/16/2020
// Working with Objects

// Exercise 1
var employee = {
    id: 467239,
    name: "Megan Cain",
    team: 4,
    payTier: 7
}

var team = employee.team;
var name = employee.name;
//var age = employee.age; // This will return 'undefined' because there is no 'age' variable inside 'employee'.

// Exercise 2
var student = {
    name: "Francy",
    program: "Front End",
    module: 5,
    alum: true
}

var program = student.program;
var alum = student.alum;
//var module = francy.module; // This will return an 'Uncaught ReferenceError' because there is object named 'francy'.

// Exercise 3
var user1 = {
    name: "Sodie",
    age: 8,
    breed: "shih-tzu",
    bestFriend: "Annie",
    hobbies: ["Sun bathing", "Bossing People Around", "Napping"]
}
  
  
var user2 = {
    name: "Mangia",
    age: 7,
    breed: "Greater Swiss Mountain Dog",
    hobbies: ["Checking counter for human Snacks", "Drinking out of Sodie’s Water Bowl"]
}

var userOneName = user1.name;
var userTwoAge = user2.age;
var userOneHobbies = user1.hobbies;
console.log(`${user1.breed} and a ${user2.breed} - BFFs`);
var userTwoHobbies = user2.hobbies;
console.log(userTwoHobbies);
var userOneAge = user1.age;
var avgAge = (userOneAge + userTwoAge) / 2;
console.log(avgAge);
var userTwoName = user2.name;
var userTwoHobbiesCounter = 0;
for (let i = 0; i < userTwoHobbies.length; i++) {
    userTwoHobbiesCounter++;
    console.log(`${userTwoName} loves ${userTwoHobbies[i]}`);
}
console.log(userTwoHobbiesCounter);
userOneAge = 9;
userTwoHobbies = ['going for walks in the park', 'chasing her own tail'];
console.log(userOneAge);
console.log(userTwoHobbies);

// Exercise 4
var favRecipe = {
    recipeTitle: "Chocolate Chip Cookies",
    servings: 54,
    ingredients: ["4 Cups All-Purpose Flour", "1 Tsp. Baking Soda", "1 Tsp. Salt", "2 Cups Brown Sugar", "1 Cup White Sugar", "3 Sticks Unsalted Butter (Melted)", "2 Whole Eggs", "2 Egg Yolks", "1 Tbsp. Vanilla Extract", "3 Cups Chocolate Chips"],
    directions: ["Preheat oven to 350 degrees Fahrenheit", "Grease a baking sheet", "Sift dry ingredients together; set aside.", "Mix together sugars and butter until creamy.", "Add eggs, one at a time, and vanilla until mixed.", "Mix dry ingredients into butter mixture a spoonful at a time.", "Fold in chocolate chips.", "Scoop out dough in tablespoon-sized balls onto prepared pan and bake for 15 minutes."],
    letsCook() {
        return "I'm hungry! Let's cook " + this.recipeTitle;
    }
};
console.log(`${favRecipe.recipeTitle} makes ${favRecipe.servings} servings. Some ingredients include ${favRecipe.ingredients[0]}, ${favRecipe.ingredients[3]}, and ${favRecipe.ingredients[6]}`);
var ingredients = favRecipe.ingredients;
for (let j = 0; j < ingredients.length; j++) {
    console.log(favRecipe.ingredients[j]);
}
console.log(favRecipe.letsCook());

// Exercise 5
var student = {
    name: "Tristan",
    program: "Front End",
    module: 1,
    alum: false
}

student.module = 2;
student.module = 5;
student.alum = true;
//tristan.module = 3; // Uncaught ReferenceError because there is no object named 'tristan'.
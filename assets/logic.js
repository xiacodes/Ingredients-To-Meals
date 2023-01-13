var APIspoonacular = "967014ffb258432b8a611d3960cb39de";
var allIngredients = [];
var userTopCategories = [];
var currentIngredient;


// Function to show ingredients
function showIngredients() {
    currentIngredient = $("#search-input").val();
    allIngredients.push(currentIngredient);
    renderSavedIngredients();
}

function userCategoriesSelection() {
    var selection = $(".mealoption").val();
    $('input[class="mealoption"]:checked').each(function () {
        userTopCategories.push(this.value);
    });

}


// Create a function to show the entered ingredients on the screen
function renderSavedIngredients() {
    // Clearing out existing list of ingredients to avoid repetition
    $("#enteredIngredients").empty();

    // Add list of saved ingredients entered to a list 
    for (var i = 0; i < allIngredients.length; i++) {

        // create a button to hold ingredients 
        var createButton = $("<button>");
        createButton.addClass("ingredients-available");
        createButton.attr("data-name", allIngredients[i]);
        createButton.text(allIngredients[i]);
        $("#enteredIngredients").append(createButton);
    }
}


// Function to generate meal suggestions 
/* Image size = 
90x90
312x231
636x393

example: https://spoonacular.com/productImages/35507-636x393.jpg

// Sample URL to find ingredients on Spoonacular
https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2

// For Spoonacular

For API Ninjas

*/

function generateMealSuggestion() {
    var ingredients = "";
    for (var i = 0; i < allIngredients.length; i++) {
        ingredients = ingredients + allIngredients[i] + ",+";
    }
    ingredients = ingredients.substring(0, ingredients.length - 2);
    var spoonacularURL = "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + APIspoonacular + "&ingredients=" + ingredients + "&number=1"
    var foodNinjasURL = "https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query="
    var FoodNutInfoURL = "https://food-nutrition-information.p.rapidapi.com/foods/search?query="

    // image for food suggestion 
    var foodName;
    var usedIngredient;
    var usedIngredientTwo;
    var imageURL;

    // Spoonacular Items 
    $.ajax({
        url: spoonacularURL,
        method: "GET"
    }).then(function (response) {
        imageURL = response[0].image;
        foodName = response[0].title;
        usedIngredient = response[0].usedIngredients[0].name;
        usedIngredientTwo = response[0].usedIngredients[1].name;
        console.log(response);


        // Recipe by API-Ninjas
        const settingsNinja = {
            "async": true,
            "crossDomain": true,
            "url": foodNinjasURL + foodName,
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "31292e036fmshe6f344cc63a72ecp1a4a30jsnba601eb62a9e",
                "X-RapidAPI-Host": "recipe-by-api-ninjas.p.rapidapi.com"
            }
        };


        $.ajax(settingsNinja).then(function (response) {
            console.log(response);

            // Food Nutrition Information 
            const settingsFNI = {
                "async": true,
                "crossDomain": true,
                "url": FoodNutInfoURL + usedIngredient + "&pageSize=1",
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "31292e036fmshe6f344cc63a72ecp1a4a30jsnba601eb62a9e",
                    "X-RapidAPI-Host": "food-nutrition-information.p.rapidapi.com"
                }
            };

            $.ajax(settingsFNI).done(function (data) {
                console.log(data);
            });

        });

    })

    ////////////////////////////////////

    //Create ingredients and append to page
    var createListOne = $("<li>");
    var createListTwo = $("<li>");
    createListOne.text(usedIngredient);
    createListTwo.text(usedIngredientTwo);
    $('#ingredient-list').append(createListOne);
    $('#ingredient-list').append(createListTwo);


    // Preparation Instructions and append to HTML
    

}

// Event listener to add ingredients from user 
$("#save-button").on("click", function (e) {
    e.preventDefault();
    showIngredients();
});

//Event listener for when user clicks submit 
$("#submit-button").on("click", function (e) {
    e.preventDefault();
    generateMealSuggestion();
    userCategoriesSelection();
    //  location.href = "suggestions.html";
})



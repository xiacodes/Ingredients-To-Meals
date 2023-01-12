var APIspoonacular = "967014ffb258432b8a611d3960cb39de";
var APINinjas = '967014ffb258432b8a611d3960cb39de';
var APICalorieNinjas = '967014ffb258432b8a611d3960cb39de';
var APIFoodNutInfo = "967014ffb258432b8a611d3960cb39de";
var allIngredients = [];
var userTopCategories = [];
var currentIngredient;


// Function to show ingredients
function showIngredients() {
    currentIngredient = $("#search-input").val();
    allIngredients.push(currentIngredient);
    renderSavedIngredients();
}

function userCategoriesSelection (){
    var selection = $(".mealoption").val();
    $('input[class="mealoption"]:checked').each(function() {
       userTopCategories.push(this.value);
       console.log(userTopCategories);

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

function generateMealSuggestion (){

}

// Event listener to add ingredients from user 
$("#save-button").on("click", function (e) {
    e.preventDefault();
    showIngredients();
});

//Event listener for when user clicks submit 
$("#submit-button").on("click", function(e){
    e.preventDefault();
    generateMealSuggestion();
    userCategoriesSelection ();
    location.href = "suggestions.html";
})



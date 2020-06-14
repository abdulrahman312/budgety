

// Budget Controller
var budgetController = (function() {

    

})();


// UI Controller
var UIController = (function() {

    


})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {    

    var ctrlAddItem = function() {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.whicH === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);


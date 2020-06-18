

// Budget Controller
var budgetController = (function() {

    

})();


// UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputValue: '.add__value',
        inputDescription: '.add__description',
        inputBtn: '.add__btn'
    };

    return {
        getinput: function() {
            return {
                 type: document.querySelector(DOMstrings.inputType).value,  // will be either inc or exp
                 description: document.querySelector(DOMstrings.inputDescription).value,
                 value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();


// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {    

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);


        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);


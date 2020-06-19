

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

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getinput();

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    }
    
    return {
        init: function() {
            console.log('Application has staterted.');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();


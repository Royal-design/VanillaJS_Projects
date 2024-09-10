//budget controller
var budgetController = (function() {

    var expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    expense.prototype.calcPercentages = function(totalIncome) {

        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percentage = -1;
        }
    };
    expense.prototype.getPercentage = function() {
        return this.percentage;
    }
    var income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum = sum + current.value;
        })
        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1,
    };
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            //create new item based on 'inc or 'type
            if (type === 'exp') {
                newItem = new expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new income(ID, des, val);
            } else {
                percentage = -1;
            }

            //push it imto our data structure
            data.allItems[type].push(newItem);

            //return the element
            return newItem;
        },
        deleteList: function(type, id) {
            var ids, index;
            ids = data.allItems[type].map(function(current) {
                return current.id;
            })
            index = ids.indexOf[id]
            if (index !== 1) {
                data.allItems[type].splice(index, 1)
            }
        },
        calculatePercentages: function() {

            // a =20;
            // b=10;
            // c=40;
            // income =100;
            // a = 20/100 = 20%;
            // b = 10/100 = 10%;
            // c = 40/100 =  40%

            data.allItems.exp.forEach(function(current) {
                return current.calcPercentages(data.totals.inc);
            })

        },
        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(curr) {
                return curr.getPercentage();
            })
            return allPerc;
        },
        calcBudget: function() {
            //calculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            //calculate budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            //calculate the perscentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }
        },
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage,
            }
        },
        testing: function() {
            console.log(data);
        }
    };

})();



//UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month',
        
    }
    var formatNumber;
    formatNumber = function(num, type) {
        var numSplit, int, decimal;
        // + or - before number
        // exactly two decimal point
        // comma separating the thousand
        num = Math.abs(num);
        num = num.toFixed(2);
        //separating the numbers into number and decimal
        numSplit = num.split('.');
        int = numSplit[0];
        decimal = numSplit[1];
        //adding comma;
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
            //223,234
        }
        //adding signs 
        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + decimal;

    };
    var nodeListForEach = function(list, callBack) {
        for (let i = 0; i < list.length; i++) {
            callBack(list[i], i);

        }
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            //create html string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="item__date"></div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="item__date"></div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }

            //replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            //insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields: function() {
            var fields, fieldArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldArr = Array.prototype.slice.call(fields);
            fieldArr.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldArr[0].focus();
        },
        deleteListId: function(selectorId) {
            var el;
            el = document.getElementById(selectorId);
            el.parentNode.removeChild(el);
        },
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');


            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }

        },
        displayMonth: function() {
            var year, now, month, months;
            now = new Date();
            year = now.getFullYear();
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            month = now.getMonth();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },
        displayPercentages: function(percentages) {
            var field;
            field = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

            nodeListForEach(field, function(current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%'
                } else {
                    current.textContent = '---';
                }

            })
        },
        changeType: function() {
            var fields;
            fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue)
            nodeListForEach(fields, function(curr) {
                return curr.classList.toggle('red-focus')
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red')
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    }

})();

// global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListener = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem)

        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
        document.querySelector('.container').addEventListener('click', ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changeType)

    }
    var ctrlDeleteItem = function(event) {
        var listId, splitId, type, id;
        listId = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //split listId into type and id
        splitId = listId.split('-');
        type = splitId[0];
        id = parseInt(splitId[1]);
        budgetCtrl.deleteList(type, id);
        UICtrl.deleteListId(listId)
        updateBudget();
        updatePercentages()

    }

    var updateBudget = function() {
        //1. calculate the budget
        budgetCtrl.calcBudget();
        //2. return the budget
        var budget = budgetCtrl.getBudget();
        //3. display the budget on UI
        UICtrl.displayBudget(budget)
    };

    var updatePercentages = function() {
        //1. calculate percentage
        budgetCtrl.calculatePercentages()
            //2. read percentage from the budget controller
        var percentages = budgetCtrl.getPercentages();

        //3. update the UI with the new percentage
        UICtrl.displayPercentages(percentages);
    }

    var ctrlAddItem = function() {
        var input, newItem;
        //as soon someone hit the button we need:
        //1. get the field input data
        input = UICtrl.getInput();

        //2. add item to budget controller
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //3. add item to UI
            UICtrl.addListItem(newItem, input.type)
                //4. clear fields
            UICtrl.clearFields();
            updateBudget();
            updatePercentages()
        }



    }

    return {
        init: function() {
            console.log('this program has started');
            UICtrl.displayMonth();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1,
            })
            setupEventListener()
        }
    }

})(budgetController, UIController)

controller.init();
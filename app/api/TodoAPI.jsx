var $ = require('jQuery');

module.exports = {

    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // Filter by showCompleted
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        // Filter by searchText
        filteredTodos = filteredTodos.filter((todo) => {
            var todoText = todo.text.toLowerCase();
            // if (searchText.length > 0) {
            //     return lowerCaseTodo.indexOf(searchText) !== -1;
            // }
            // return true;

            return searchText.length === 0 || todoText.indexOf(searchText) > -1;
        });

        // Sort todos with non-competed first
        filteredTodos.sort((a, b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
}

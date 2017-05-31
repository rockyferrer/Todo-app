var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'Some todo1',
                completed: true
            }, {
                id: 2,
                text: 'todo2',
                completed: false
            }, {
                id: 3,
                text: 'Some todo3',
                completed: true
            }
        ];
        it('should show all todos if show completed is checked', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);

        });

        it('should show uncompleted todos if show completed is not checked', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);

        });

        it('should sort todos with uncompleted coming before completed', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
            expect(filteredTodos[1].completed).toBe(true);
            expect(filteredTodos[2].completed).toBe(true);
        });

        it('should show all todo items when searchText is empty', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return matching todos when searchText is provided', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
            expect(filteredTodos.length).toBe(2);
        });
    });
});

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        var task = 'Random task';
        var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: []});
        todoApp.handleAddTodo(task);

        expect(todoApp.state.todos[0].text).toBe(task);
    });
});

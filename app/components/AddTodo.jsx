var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();

        var todo = this.refs.todo.value;
        if (todo.length > 0) {
            this.refs.todo.value = '';
            this.props.onAddNewTodo(todo);
        } else {
            this.refs.todo.focus();
        }
    },

    render: function() {
        return (
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todo" placeholder="Enter task..."/>
                    <button className="button expanded">Add Task</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;

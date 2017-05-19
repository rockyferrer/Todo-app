var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var todoClassName = completed
            ? 'todo todo-completed'
            : 'todo';
        var renderCreatedDate = () => {
            var timestamp = createdAt;

            return 'Created ' + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        }

        var renderCompletedDate = () => {
            if (completed && completedAt) {
                var timestamp = completedAt;
                return 'Completed ' + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
            }
        }

        return (
            <div className={todoClassName} onClick={() => {
                this.props.onToggle(id);
            }}>
                <div><input type="checkbox" checked={completed}/></div>
                <div>
                    <p>{text}</p>
                    <p className="todo__subtext">{renderCreatedDate()}</p>
                    <p className="todo__subtext">{renderCompletedDate()}</p>
                </div>
            </div>
        );
    }
});

module.exports = Todo;

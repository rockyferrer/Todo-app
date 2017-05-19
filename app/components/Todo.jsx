var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
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
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed} />
                <p>{text}</p>
                <p>{renderCreatedDate()}</p>
                <p>{renderCompletedDate()}</p>
            </div>
        );
    }
});

module.exports = Todo;

import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <nav>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
            </nav>
        )
    }
});

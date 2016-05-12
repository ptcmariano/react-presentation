import React from 'react';
import { Link } from 'react-router';
import NavHeader from 'ui/nav-header.js';

export default React.createClass({
    render: function() {
        return (
            <div className="app">
                <NavHeader />
                <main>
                    <h1>Home</h1>
                </main>
            </div>
        )
    }
});

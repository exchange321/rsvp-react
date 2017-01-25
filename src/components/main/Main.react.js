/**
 * Created by Wayuki on 25-Jan-17 0025.
 */
import React, { PropTypes } from 'react';

const Main = ({ children, onFilterChecked }) => (
    <div className="main">
        <h2>Invitees</h2>
        <div>
            <label htmlFor="filter">
                { 'Hide those who haven\'t responded' }
                <input type="checkbox" id="filter" onChange={onFilterChecked} />
            </label>
        </div>
        <ul id="invitedList">
            { children }
        </ul>
    </div>
);

Main.propTypes = {
    onFilterChecked: PropTypes.func.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Main;

/**
 * Created by Wayuki on 25-Jan-17 0025.
 */
import React, { PropTypes } from 'react';

const Header = ({ name, onFieldChange, onFormSubmit }) => (
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form id="registrar" onSubmit={onFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Invite Someone"
                value={name}
                onChange={onFieldChange}
            />
            <button type="submit" name="submit">Submit</button>
        </form>
    </header>
);

Header.propTypes = {
    name: PropTypes.string.isRequired,
    onFieldChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
};

export default Header;
